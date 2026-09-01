const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const root = path.resolve(__dirname, '..');
const src = path.join(root, 'src/icons');
const regPath = path.join(root, 'registry/icons.json');
const rootRegPath = path.join(root, 'registry.json');

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(e => {
    const p = path.join(dir, e.name);
    return e.isDirectory() ? walk(p) : e.name.toLowerCase().endsWith('.svg') ? [p] : [];
  }).sort();
}
function clean(s) { return String(s).replace(/<!--[\s\S]*?-->/g, '').replace(/\sdata-delluna-id=["'][^"']*["']/gi, '').replace(/\r?\n/g, ' ').replace(/>\s+</g, '><').replace(/\s+/g, ' ').trim(); }
function hash(s) { return crypto.createHash('sha256').update(clean(s)).digest('hex'); }
const registry = JSON.parse(fs.readFileSync(regPath, 'utf8'));
const rootRegistry = JSON.parse(fs.readFileSync(rootRegPath, 'utf8'));
if (JSON.stringify(registry) !== JSON.stringify(rootRegistry)) throw new Error('registry.json and registry/icons.json are out of sync');
const files = walk(src);
const seenNames = new Set();
const seenIds = new Set();
for (const file of files) {
  const rel = path.relative(src, file).replaceAll(path.sep, '/');
  const raw = fs.readFileSync(file, 'utf8');
  if (!/<svg\b[^>]*>/i.test(raw) || !/<\/svg>\s*$/i.test(raw.trim())) throw new Error(`Invalid SVG: ${rel}`);
  const name = path.basename(rel, '.svg');
  const item = registry.icons[name];
  if (!item || item.aliasOf) throw new Error(`Missing registry entry for ${rel}`);
  if (seenNames.has(name)) throw new Error(`Duplicate icon name: ${name}`);
  seenNames.add(name);
  if (seenIds.has(item.id)) throw new Error(`Duplicate Delluna ID: ${item.id}`);
  seenIds.add(item.id);
  if (item.path !== rel) throw new Error(`Registry path mismatch for ${name}`);
  if (item.hash !== hash(raw)) throw new Error(`Registry hash mismatch for ${name}`);
  const embedded = raw.match(/data-delluna-id=["']([^"']+)["']/i)?.[1];
  if (embedded && embedded !== item.id) throw new Error(`Embedded ID mismatch for ${name}`);
}
const sourceNames = new Set(files.map(f => path.basename(f, '.svg')));
for (const [name, item] of Object.entries(registry.icons)) {
  if (item.aliasOf) continue;
  if (!sourceNames.has(name)) throw new Error(`Registry contains missing source icon: ${name}`);
}
console.log(`Delluna validation passed: ${files.length} SVGs, ${seenIds.size} unique IDs.`);

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
function sourcePath(item) { return String(item?.path || item?.file || '').replace(/^icons\//, ''); }
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
  if (sourcePath(item) !== rel) throw new Error(`Registry path mismatch for ${name}`);
  if (item.hash !== hash(raw)) throw new Error(`Registry hash mismatch for ${name}`);
  const embedded = raw.match(/data-delluna-id=["']([^"']+)["']/i)?.[1];
  if (embedded && embedded !== item.id) throw new Error(`Embedded ID mismatch for ${name}`);
}
const sourceNames = new Set(files.map(f => path.basename(f, '.svg')));
for (const [name, item] of Object.entries(registry.icons)) {
  if (item.aliasOf) continue;
  if (!sourceNames.has(name)) throw new Error(`Registry contains missing source icon: ${name}`);
}
const distRegistryPath = path.join(root, 'dist/registry.json');
if (fs.existsSync(distRegistryPath)) {
  const distRegistry = JSON.parse(fs.readFileSync(distRegistryPath, 'utf8'));
  if (JSON.stringify(distRegistry) !== JSON.stringify(registry)) throw new Error('dist/registry.json is out of sync with registry/icons.json');
}
const distFull = path.join(root, 'dist/delluna-full.js');
if (fs.existsSync(distFull)) {
  const full = fs.readFileSync(distFull, 'utf8');
  const marker = 'var ICONS_RAW = ';
  const start = full.indexOf(marker);
  const geometry = start >= 0 ? full.indexOf('\n  // ---- geometry', start) : -1;
  const end = geometry >= 0 ? full.lastIndexOf('};', geometry) + 1 : -1;
  if (start < 0 || end < 0) throw new Error('dist/delluna-full.js is malformed');
  const embedded = JSON.parse(full.slice(start + marker.length, end));
  if (Object.keys(embedded).length !== files.length) throw new Error('dist/delluna-full.js does not contain every source icon');
  for (const file of files) {
    const rel = path.relative(src, file).replaceAll(path.sep, '/');
    const name = path.basename(rel, '.svg');
    const raw = fs.readFileSync(file, 'utf8').replace(/<!--[\s\S]*?-->/g, '').replace(/\sdata-delluna-id=["'][^"']*["']/gi, '').trim();
    if (embedded[name] !== raw) throw new Error(`Full bundle artwork mismatch for ${name}`);
  }
}
console.log(`Delluna validation passed: ${files.length} SVGs, ${seenIds.size} unique IDs.`);

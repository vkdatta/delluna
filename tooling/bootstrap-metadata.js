const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const root = path.resolve(__dirname, '..');
const src = path.join(root, 'src/icons');
const outDir = path.join(root, 'src/metadata');
const registryArg = process.argv.slice(2).find(x => x.startsWith('--registry='));
const registryFile = registryArg ? path.resolve(registryArg.slice('--registry='.length)) : null;

function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(e => {
    const p = path.join(dir, e.name);
    return e.isDirectory() ? walk(p) : e.name.toLowerCase().endsWith('.svg') ? [p] : [];
  }).sort();
}
function clean(s) { return String(s).replace(/<!--[\s\S]*?-->/g, '').replace(/\sdata-delluna-id=["'][^"']*["']/gi, '').replace(/\r?\n/g, ' ').replace(/>\s+</g, '><').replace(/\s+/g, ' ').trim(); }
function idFallback(name, raw) { return 'dl_' + crypto.createHash('sha256').update(`${name}\0${clean(raw)}`).digest('hex').slice(0, 20); }
function readLegacy() {
  if (!registryFile || !fs.existsSync(registryFile)) return null;
  const value = JSON.parse(fs.readFileSync(registryFile, 'utf8'));
  return value.icons || value;
}

const legacy = readLegacy();
fs.mkdirSync(outDir, { recursive: true });
let created = 0;
for (const file of walk(src)) {
  const name = path.basename(file, '.svg');
  const target = path.join(outDir, `${name}.json`);
  if (fs.existsSync(target)) continue;
  const old = legacy?.[name];
  const raw = fs.readFileSync(file, 'utf8');
  const id = old?.id || raw.match(/data-delluna-id=["']([^"']+)["']/i)?.[1] || idFallback(name, raw);
  const tags = Array.isArray(old?.tags) ? [...new Set(old.tags.map(String).map(x => x.trim()).filter(Boolean))] : [...new Set(name.toLowerCase().split(/[_-]+/).filter(Boolean))];
  fs.writeFileSync(target, JSON.stringify({ id, tags }, null, 2) + '\n');
  created++;
}
console.log(`Bootstrap metadata complete: created ${created} metadata files in src/metadata.`);

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const root = path.resolve(__dirname, '..');
const src = path.join(root, 'src/icons');
const metadataDir = path.join(root, 'src/metadata');
const registryDir = path.join(root, 'registry');

function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(e => {
    const p = path.join(dir, e.name);
    return e.isDirectory() ? walk(p) : e.name.toLowerCase().endsWith('.svg') ? [p] : [];
  }).sort();
}
function clean(s) {
  return String(s).replace(/<!--[\s\S]*?-->/g, '').replace(/\sdata-delluna-id=["'][^"']*["']/gi, '').replace(/\r?\n/g, ' ').replace(/>\s+</g, '><').replace(/\s+/g, ' ').trim();
}
function hash(s) { return crypto.createHash('sha256').update(clean(s)).digest('hex'); }
function assert(ok, message) { if (!ok) throw new Error(message); }
function readJSON(file) { return JSON.parse(fs.readFileSync(file, 'utf8')); }

const files = walk(src);
const manifestPath = path.join(registryDir, 'manifest.json');
const indexPath = path.join(registryDir, 'index.json');
const tagsPath = path.join(registryDir, 'tags.json');
assert(fs.existsSync(manifestPath), 'Generated registry is missing: registry/manifest.json. Run npm run build.');
assert(fs.existsSync(indexPath), 'Generated registry is missing: registry/index.json. Run npm run build.');
assert(fs.existsSync(tagsPath), 'Generated registry is missing: registry/tags.json. Run npm run build.');

const manifest = readJSON(manifestPath);
const index = readJSON(indexPath);
const tags = readJSON(tagsPath);
assert(manifest.version === 10, 'Delluna registry version must be 10');
assert(JSON.stringify(manifest.variants) === JSON.stringify(['og','hud','orbit','circuit','plasma']), 'Variant contract mismatch');
assert(JSON.stringify(manifest.motions) === JSON.stringify(['none','pulse','spin','bounce','shake','wiggle','float','draw']), 'Motion contract mismatch');
assert(manifest.shardAlgorithm === 'name-prefix-v2', 'Registry shard algorithm mismatch');
assert(index.iconCount === files.length, 'Registry index count does not match source');

const indexByName = new Map(index.icons.map(x => [x.name, x]));
const seenNames = new Set();
const seenIds = new Set();
for (const file of files) {
  const rel = path.relative(src, file).replaceAll(path.sep, '/');
  const name = path.basename(rel, '.svg');
  assert(!seenNames.has(name), `Duplicate public icon name: ${name}`);
  seenNames.add(name);
  const item = indexByName.get(name);
  assert(item, `Missing generated registry entry: ${name}`);
  assert(!seenIds.has(item.id), `Duplicate Delluna ID: ${item.id}`);
  seenIds.add(item.id);
  assert(item.path === rel, `Registry path mismatch for ${name}`);
  const raw = fs.readFileSync(file, 'utf8');
  assert(/^\s*<svg\b/i.test(raw) && /<\/svg>\s*$/i.test(raw), `Invalid SVG: ${rel}`);
  assert(item.hash === hash(raw), `Registry hash mismatch for ${name}`);

  const metaPath = path.join(metadataDir, `${name}.json`);
  if (fs.existsSync(metaPath)) {
    const meta = readJSON(metaPath);
    assert(meta && typeof meta === 'object' && !Array.isArray(meta), `Invalid metadata: ${name}`);
    if (meta.id) assert(meta.id === item.id, `Metadata ID mismatch for ${name}`);
    if (meta.tags) assert(JSON.stringify([...new Set(meta.tags.map(String))]) === JSON.stringify(item.tags), `Metadata tags mismatch for ${name}`);
  }

  const distIcon = path.join(root, 'dist/icons', ...rel.split('/'));
  assert(fs.existsSync(distIcon), `Missing dist icon: ${rel}`);
  const esm = path.join(root, 'dist/esm', `${name}.mjs`);
  assert(fs.existsSync(esm), `Missing ESM entry: ${name}`);
  const esmText = fs.readFileSync(esm, 'utf8');
  assert(esmText.includes(`export default icon;`), `ESM default export missing: ${name}`);
  assert(esmText.includes(item.hash), `ESM hash missing: ${name}`);
}

for (const key of manifest.shards) {
  const file = path.join(registryDir, 'shards', `${key}.json`);
  assert(fs.existsSync(file), `Missing registry shard: ${key}`);
  const shard = readJSON(file);
  for (const [name, item] of Object.entries(shard.icons || {})) {
    assert(indexByName.has(name), `Shard contains unknown icon: ${name}`);
    assert(indexByName.get(name).id === item.id, `Shard/index ID mismatch: ${name}`);
    assert(indexByName.get(name).path === item.path, `Shard/index path mismatch: ${name}`);
    assert(indexByName.get(name).hash === item.hash, `Shard/index hash mismatch: ${name}`);
  }
}

for (const [tag, names] of Object.entries(tags.tags || {})) {
  assert(Array.isArray(names), `Tag index entry is not an array: ${tag}`);
  for (const name of names) assert(indexByName.has(name), `Tag ${tag} references unknown icon ${name}`);
}

assert(!fs.existsSync(path.join(root, 'registry.json')), 'Legacy root registry.json must not exist');
assert(!fs.existsSync(path.join(registryDir, 'icons.json')), 'Legacy registry/icons.json must not exist');
assert(!fs.existsSync(path.join(root, 'dist/registry.json')), 'Legacy dist/registry.json must not exist');
assert(!fs.existsSync(path.join(root, 'dist/styles')), 'Generated style distributions must not exist');

const fullPath = path.join(root, 'dist/delluna-full.js');
assert(fs.existsSync(fullPath), 'Missing dist/delluna-full.js');
const full = fs.readFileSync(fullPath, 'utf8');
const marker = 'var ICONS_RAW = ';
const start = full.indexOf(marker);
const geometry = full.indexOf('\n  // ---- geometry', start);
const end = geometry >= 0 ? full.lastIndexOf('};', geometry) + 1 : -1;
assert(start >= 0 && end >= 0, 'Full bundle marker is malformed');
const embedded = JSON.parse(full.slice(start + marker.length, end));
assert(Object.keys(embedded).length === files.length, `Full bundle count ${Object.keys(embedded).length} != source count ${files.length}`);

console.log(`Delluna validation passed: ${files.length} SVGs, ${seenIds.size} unique IDs, generated registry/dist are internally consistent.`);

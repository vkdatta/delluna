const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const root = path.resolve(__dirname, '..');
const src = path.join(root, 'src/icons');
const regPath = path.join(root, 'registry/icons.json');
const rootRegPath = path.join(root, 'registry.json');
const manifestPath = path.join(root, 'registry/manifest.json');
const shardDir = path.join(root, 'registry/shards');

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(e => {
    const p = path.join(dir, e.name);
    return e.isDirectory() ? walk(p) : e.name.toLowerCase().endsWith('.svg') ? [p] : [];
  }).sort();
}
function clean(s) { return String(s).replace(/<!--[\s\S]*?-->/g, '').replace(/\sdata-delluna-id=["'][^"']*["']/gi, '').replace(/\r?\n/g, ' ').replace(/>\s+</g, '><').replace(/\s+/g, ' ').trim(); }
function hash(s) { return crypto.createHash('sha256').update(clean(s)).digest('hex'); }
function sourcePath(item) { return String(item?.path || item?.file || '').replace(/^icons\//, ''); }
function loadRegistry() {
  if (fs.existsSync(regPath)) return JSON.parse(fs.readFileSync(regPath, 'utf8'));
  if (!fs.existsSync(manifestPath)) throw new Error('Canonical registry is missing: registry/icons.json or registry/manifest.json');
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  const icons = {}, aliases = {};
  for (const key of (manifest.shards || [])) {
    const shardPath = path.join(shardDir, `${key}.json`);
    if (!fs.existsSync(shardPath)) throw new Error(`Missing registry shard: ${key}`);
    const shard = JSON.parse(fs.readFileSync(shardPath, 'utf8'));
    Object.assign(icons, shard.icons || {});
    Object.assign(aliases, shard.aliases || {});
  }
  return { ...manifest, icons, aliases };
}
const registry = loadRegistry();
if (fs.existsSync(rootRegPath) && fs.existsSync(regPath)) {
  const rootRegistry = JSON.parse(fs.readFileSync(rootRegPath, 'utf8'));
  if (JSON.stringify(registry) !== JSON.stringify(rootRegistry)) throw new Error('registry.json and registry/icons.json are out of sync');
}
if (fs.existsSync(manifestPath)) {
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  if (manifest.shardAlgorithm !== 'name-prefix-v2' || !Array.isArray(manifest.shards)) throw new Error('Invalid registry shard manifest');
  if (fs.existsSync(regPath)) {
    const canonicalText = fs.readFileSync(regPath, 'utf8');
    const expectedHash = crypto.createHash('sha256').update(canonicalText).digest('hex');
    if (manifest.registryHash !== expectedHash) throw new Error('Registry manifest integrity hash does not match registry/icons.json');
  }
  for (const key of manifest.shards) if (!fs.existsSync(path.join(shardDir, `${key}.json`))) throw new Error(`Missing registry shard: ${key}`);
  const shardIcons = {}, shardAliases = {};
  for (const key of manifest.shards) {
    const shard = JSON.parse(fs.readFileSync(path.join(shardDir, `${key}.json`), 'utf8'));
    Object.assign(shardIcons, shard.icons || {}); Object.assign(shardAliases, shard.aliases || {});
  }
  if (Object.keys(shardIcons).length !== Object.values(registry.icons || {}).filter(x => !x.aliasOf).length) throw new Error('Registry shard icon count does not match registry');
  if (Object.keys(shardAliases).length !== Object.keys(registry.aliases || {}).length) throw new Error('Registry shard alias count does not match registry');
}
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
if (fs.existsSync(distRegistryPath) && fs.existsSync(regPath)) {
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

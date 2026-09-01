const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const root = path.resolve(__dirname, '..');
const src = path.join(root, 'src/icons');
const dist = path.join(root, 'dist');
const regDir = path.join(root, 'registry');
const regPath = path.join(regDir, 'icons.json');
const rootRegPath = path.join(root, 'registry.json');

const old = fs.existsSync(regPath) ? JSON.parse(fs.readFileSync(regPath, 'utf8')) : { icons: {}, aliases: {} };
const variants = old.variants || ['og', 'hud', 'orbit', 'circuit', 'plasma'];
const aliases = old.aliases || {};
const oldIcons = Object.values(old.icons || {}).filter(x => !x.aliasOf);
const byPath = new Map(oldIcons.map(x => [String(x.path || x.file || '').replace(/^icons\//, ''), x]));
const byId = new Map(oldIcons.filter(x => x.id).map(x => [x.id, x]));

function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) return walk(file);
    return entry.name.toLowerCase().endsWith('.svg') ? [file] : [];
  }).sort((a, b) => a.localeCompare(b));
}

function clean(svg) {
  return String(svg)
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/\sdata-delluna-id=["'][^"']*["']/gi, '')
    .replace(/\r?\n/g, ' ')
    .replace(/>\s+</g, '><')
    .replace(/\s+/g, ' ')
    .trim();
}

function hash(value) {
  return crypto.createHash('sha256').update(value).digest('hex');
}

function genId() {
  return 'dl_' + crypto.randomBytes(10).toString('hex');
}

function title(name) {
  return name
    .replace(/[_-]+/g, ' ')
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/\b\w/g, c => c.toUpperCase());
}

function tags(name) {
  return [...new Set(name.toLowerCase().split(/[_-]+/).filter(Boolean))];
}

function sameSource(a, b) {
  return a && b && a.hash && b.hash && a.hash === b.hash;
}

function ensureUniqueId(id, usedIds, rel) {
  if (!usedIds.has(id)) return id;
  throw new Error(`Duplicate Delluna ID ${id} in ${rel}. IDs must be unique.`);
}

function writeJSON(file, value) {
  fs.writeFileSync(file, JSON.stringify(value, null, 2) + '\n');
}

const files = walk(src);
const registry = {
  version: 4,
  library: old.library || 'Delluna',
  variants,
  generatedAt: new Date().toISOString(),
  icons: {},
  aliases
};

const usedIds = new Set();
const seenNames = new Map();
const duplicates = [];
const changed = [];

for (const file of files) {
  const rel = path.relative(src, file).replaceAll(path.sep, '/');
  const raw = fs.readFileSync(file, 'utf8');
  if (!/<svg\b[^>]*>/i.test(raw) || !/<\/svg>\s*$/i.test(raw.trim())) {
    throw new Error(`Invalid SVG: ${rel}`);
  }

  const cleanSvg = clean(raw);
  const h = hash(cleanSvg);
  const embedded = raw.match(/data-delluna-id=["']([^"']+)["']/i)?.[1] || null;
  const previous = embedded ? byId.get(embedded) : byPath.get(rel);
  const id = ensureUniqueId(previous?.id || embedded || genId(), usedIds, rel);
  usedIds.add(id);

  const name = previous?.name || path.basename(rel, '.svg');
  if (seenNames.has(name)) {
    throw new Error(`Duplicate icon name "${name}" in ${seenNames.get(name)} and ${rel}. Rename one icon in the Admin Portal or registry before building.`);
  }
  seenNames.set(name, rel);

  const oldItem = previous?.id ? byId.get(previous.id) : null;
  const unchanged = sameSource(oldItem, { hash: h }) && String(oldItem.path || '') === rel && oldItem.name === name;
  const updatedAt = unchanged ? oldItem.updatedAt : new Date().toISOString();
  if (!unchanged) changed.push(rel);

  registry.icons[name] = {
    id,
    name,
    title: previous?.title || title(name),
    file: `icons/${rel}`,
    path: rel,
    tags: previous?.tags || tags(name),
    categories: previous?.categories || [rel.includes('/') ? rel.split('/')[0] : 'general'],
    aliases: previous?.aliases || [],
    hash: h,
    updatedAt
  };

  const oldSame = oldIcons.find(x => x.hash && x.hash === h && x.id !== id);
  if (oldSame) duplicates.push({ path: rel, duplicateOf: oldSame.path, id });
}

for (const [alias, target] of Object.entries(aliases)) {
  if (!registry.icons[alias] && registry.icons[target]) {
    registry.icons[alias] = {
      name: alias,
      title: title(alias),
      aliasOf: target,
      tags: [alias, target],
      categories: ['alias']
    };
  }
}

// Do not create a new registry timestamp for a build that has no registry change.
// This prevents the GitHub Actions build from committing forever on its own output.
const comparable = value => JSON.stringify({ ...value, generatedAt: '' });
const previousComparable = old && old.icons ? comparable({ ...old, icons: old.icons }) : '';
if (old && old.icons && comparable(registry) === previousComparable) {
  registry.generatedAt = old.generatedAt || registry.generatedAt;
}

fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(path.join(dist, 'icons'), { recursive: true });
fs.mkdirSync(path.join(dist, 'esm'), { recursive: true });

for (const file of files) {
  const rel = path.relative(src, file).replaceAll(path.sep, '/');
  const raw = fs.readFileSync(file, 'utf8');
  const embedded = raw.match(/data-delluna-id=["']([^"']+)["']/i)?.[1];
  const item = embedded
    ? Object.values(registry.icons).find(x => x.id === embedded)
    : registry.icons[path.basename(rel, '.svg')];
  if (!item) throw new Error(`Registry item missing for ${rel}`);

  const out = path.join(dist, 'icons', rel);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  // Source SVGs are authoritative. Never mutate src during build.
  const withId = /data-delluna-id=/i.test(raw)
    ? raw
    : raw.replace(/<svg(\s|>)/i, `<svg data-delluna-id="${item.id}"$1`);
  fs.writeFileSync(out, withId);
  fs.writeFileSync(
    path.join(dist, 'esm', rel.replace(/\.svg$/i, '.js')),
    `export const name=${JSON.stringify(item.name)};\nexport const id=${JSON.stringify(item.id)};\nexport const url=new URL('../icons/${rel}',import.meta.url).href;\nexport async function svg(){return fetch(url).then(r=>r.text())}\n`
  );
}

writeJSON(regPath, registry);
writeJSON(rootRegPath, registry);
writeJSON(path.join(dist, 'registry.json'), registry);
writeJSON(path.join(dist, 'duplicates.json'), { duplicates });
fs.copyFileSync(path.join(root, 'runtime', 'delluna.js'), path.join(dist, 'delluna.js'));
fs.copyFileSync(path.join(root, 'runtime', 'delluna-full.js'), path.join(dist, 'delluna-full.js'));
fs.copyFileSync(path.join(root, 'runtime', 'delluna.css'), path.join(dist, 'delluna.css'));
fs.writeFileSync(path.join(dist, '_headers'), `/*\n  Access-Control-Allow-Origin: *\n  Access-Control-Allow-Methods: GET, HEAD, OPTIONS\n  Access-Control-Allow-Headers: *\n  Cache-Control: public, max-age=31536000, immutable\n\n/registry.json\n  Cache-Control: public, max-age=60, must-revalidate\n`);

if (process.argv.includes('--check')) {
  if (duplicates.length) console.warn(`Exact duplicate artwork: ${duplicates.length}`);
  else console.log('No exact duplicate artwork.');
  console.log(`Validated ${files.length} source SVGs without modifying source files.`);
  process.exit(0);
}

console.log(`Delluna V4: ${files.length} source icons, ${changed.length} changed, ${duplicates.length} exact duplicate artwork matches.`);

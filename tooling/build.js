const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const root = path.resolve(__dirname, '..');
const srcIcons = path.join(root, 'src/icons');
const srcMetadata = path.join(root, 'src/metadata');
const dist = path.join(root, 'dist');
const registryDir = path.join(root, 'registry');

const VARIANTS = ['og', 'hud', 'orbit', 'circuit', 'plasma'];
const MOTIONS = ['none', 'pulse', 'spin', 'bounce', 'shake', 'wiggle', 'float', 'draw'];
const VERSION = 10;

function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true })
    .flatMap(entry => {
      const file = path.join(dir, entry.name);
      if (entry.isDirectory()) return walk(file);
      return entry.name.toLowerCase().endsWith('.svg') ? [file] : [];
    })
    .sort((a, b) => a.localeCompare(b));
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

function isSafeSVG(value) {
  let text = String(value || '')
    .replace(/^\s*(?:<\?xml[^>]*\?>\s*)+/i, '')
    .replace(/<!--[\s\S]*?-->/g, '');
  if (!/^\s*<svg\b/i.test(text) || !/<\/svg>\s*$/i.test(text)) return false;
  if (/<\s*(script|foreignObject|iframe|object|embed|audio|video|image|symbol)\b/i.test(text)) return false;
  if (/\son[a-z0-9:_-]*\s*=|javascript\s*:/i.test(text)) return false;

  const allowedTags = new Set([
    'svg','g','path','circle','rect','ellipse','line','polyline','polygon','text','tspan','title','desc',
    'metadata','defs','clippath','mask','lineargradient','radialgradient','stop','pattern','filter',
    'fegaussianblur','feoffset','fecolormatrix','use','style'
  ]);
  const allowedAttrs = new Set([
    'viewbox','data-delluna-id','fill','stroke','stroke-width','stroke-linecap','stroke-linejoin','cx','cy','r',
    'x','y','x1','y1','x2','y2','width','height','rx','ry','d','points','font-size','font-family','font-weight',
    'fill-rule','clip-rule','opacity','fill-opacity','stroke-opacity','stroke-miterlimit','transform','transform-origin',
    'vector-effect','xmlns','xmlns:xlink','aria-hidden','role','id','class','href','xlink:href','offset','stop-color',
    'stop-opacity','gradientunits','gradienttransform','patternunits','patterncontentunits','preserveaspectratio',
    'enable-background','filterunits','primitiveunits','result','in','in2','stddeviation','type','values','style',
    'display','visibility','color-interpolation-filters'
  ]);

  const tagPattern = /<\/?([a-zA-Z][\w:-]*)(?:\s+[^<>]*?)?\/?\s*>/g;
  const stack = [];
  let match;
  let count = 0;
  while ((match = tagPattern.exec(text))) {
    const tag = match[1].toLowerCase();
    const raw = match[0];
    if (!allowedTags.has(tag)) return false;
    if (raw.startsWith('</')) {
      if (stack.pop() !== tag) return false;
      continue;
    }
    count++;
    const attrs = raw.replace(/^<\s*[a-zA-Z][\w:-]*/, '').replace(/\/?\s*>$/, '');
    const attrPattern = /([a-zA-Z_:][\w:.-]*)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/g;
    let a;
    let last = 0;
    while ((a = attrPattern.exec(attrs))) {
      if (attrs.slice(last, a.index).trim()) return false;
      last = attrPattern.lastIndex;
      const name = a[1].toLowerCase();
      const value = String(a[2] ?? a[3] ?? a[4] ?? '').trim();
      if (!allowedAttrs.has(name)) return false;
      if (!['xmlns', 'xmlns:xlink'].includes(name) && /^(?:javascript:|data:|https?:|\/\/)/i.test(value)) return false;
      if ((name === 'href' || name === 'xlink:href') && !/^#[\w:.-]+$/.test(value)) return false;
      if (name === 'style' && /(?:@import|javascript:|expression\s*\(|url\s*\(\s*(?:https?:|data:|\/\/))/i.test(value)) return false;
      if (/url\s*\(/i.test(value) && !/^url\(\s*#[-\w:.]+\s*\)$/i.test(value)) return false;
    }
    if (attrs.slice(last).trim()) return false;
    if (!raw.endsWith('/>') && !['path','circle','rect','ellipse','line','polyline','polygon','stop','use','fegaussianblur','feoffset','fecolormatrix'].includes(tag)) stack.push(tag);
  }
  return count > 0 && stack.length === 0;
}

function validSourcePath(rel) {
  return /^[A-Za-z0-9][A-Za-z0-9._-]*(?:\/[A-Za-z0-9][A-Za-z0-9._-]*)*\.svg$/u.test(rel) &&
    !rel.split('/').some(x => x === '.' || x === '..' || x.endsWith('.'));
}

function validIconName(name) {
  return /^[A-Za-z0-9][A-Za-z0-9._-]*$/u.test(name);
}

function fallbackId(name, cleanSvg) {
  return 'dl_' + hash(`${name}\0${cleanSvg}`).slice(0, 20);
}

function fallbackTags(name) {
  return [...new Set(name.toLowerCase().split(/[_-]+/).filter(Boolean))];
}

function readMetadata(name) {
  const file = path.join(srcMetadata, `${name}.json`);
  if (!fs.existsSync(file)) {
    return { exists: false, id: null, tags: fallbackTags(name) };
  }
  let value;
  try {
    value = JSON.parse(fs.readFileSync(file, 'utf8'));
  } catch (error) {
    throw new Error(`Invalid metadata JSON for ${name}: ${error.message}`);
  }
  if (!value || typeof value !== 'object' || Array.isArray(value)) throw new Error(`Metadata for ${name} must be a JSON object`);
  if (value.id !== undefined && !/^dl_[a-f0-9]{20}$/i.test(String(value.id))) throw new Error(`Invalid Delluna ID in src/metadata/${name}.json`);
  if (value.tags !== undefined && (!Array.isArray(value.tags) || value.tags.some(x => typeof x !== 'string' || !x.trim()))) {
    throw new Error(`Metadata tags for ${name} must be an array of non-empty strings`);
  }
  const allowed = new Set(['id', 'tags']);
  for (const key of Object.keys(value)) if (!allowed.has(key)) throw new Error(`Unsupported metadata field "${key}" in src/metadata/${name}.json`);
  return {
    exists: true,
    id: value.id ? String(value.id) : null,
    tags: [...new Set((value.tags || []).map(x => x.trim()).filter(Boolean))]
  };
}

function shardKey(name) {
  const first = String(name || '').toLowerCase()[0];
  return /^[0-9a-z_-]$/.test(first || '') ? first : '_';
}

function writeJSON(file, value) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, JSON.stringify(value) + '\n');
}

function sourceForFullBundle(raw) {
  return String(raw).replace(/<!--[\s\S]*?-->/g, '').replace(/\sdata-delluna-id=["'][^"']*["']/gi, '').trim();
}

function generateFullRuntime(files) {
  const templatePath = path.join(root, 'runtime/delluna-full.js');
  const template = fs.readFileSync(templatePath, 'utf8');
  const marker = 'var ICONS_RAW = ';
  const start = template.indexOf(marker);
  const geometry = start >= 0 ? template.indexOf('\n  // ---- geometry', start) : -1;
  const end = geometry >= 0 ? template.lastIndexOf('};', geometry) + 1 : -1;
  if (start < 0 || end < 0) throw new Error('runtime/delluna-full.js is missing the ICONS_RAW template marker');

  const embedded = {};
  for (const file of files) {
    const rel = path.relative(srcIcons, file).replaceAll(path.sep, '/');
    const name = path.basename(rel, '.svg');
    embedded[name] = sourceForFullBundle(fs.readFileSync(file, 'utf8'));
  }
  return template.slice(0, start) + marker + JSON.stringify(embedded) + template.slice(end);
}

const files = walk(srcIcons);
const seenNames = new Map();
const seenIds = new Set();
const icons = {};
const tagIndex = new Map();
const folders = new Set();
const duplicates = [];
const warnings = [];

for (const file of files) {
  const rel = path.relative(srcIcons, file).replaceAll(path.sep, '/');
  const name = path.basename(rel, '.svg');
  if (!validSourcePath(rel)) throw new Error(`Invalid icon path: ${rel}`);
  if (!validIconName(name)) throw new Error(`Invalid public icon name: ${name}`);
  if (seenNames.has(name)) throw new Error(`Duplicate icon name "${name}" in ${seenNames.get(name)} and ${rel}. Public icon names are filename-only.`);
  seenNames.set(name, rel);

  if (rel.includes('/')) {
    const parts = rel.split('/');
    for (let i = 1; i < parts.length; i++) folders.add(parts.slice(0, i).join('/'));
  }

  const raw = fs.readFileSync(file, 'utf8');
  if (!isSafeSVG(raw)) throw new Error(`Invalid or unsafe SVG: ${rel}`);
  const normalized = clean(raw);
  const h = hash(normalized);
  const metadata = readMetadata(name);
  const embedded = raw.match(/data-delluna-id=["']([^"']+)["']/i)?.[1] || null;
  const id = metadata.id || embedded || fallbackId(name, normalized);

  if (seenIds.has(id)) throw new Error(`Duplicate Delluna ID ${id} in ${rel}`);
  seenIds.add(id);
  if (!metadata.exists && !embedded) warnings.push(`Missing metadata for ${name}; using deterministic bootstrap ID. Run npm run bootstrap-metadata to freeze it.`);
  if (metadata.exists && metadata.id && embedded && metadata.id !== embedded) throw new Error(`Metadata/source ID mismatch for ${name}`);

  const tags = metadata.tags;
  for (const tag of tags) {
    const key = tag.toLowerCase();
    if (!tagIndex.has(key)) tagIndex.set(key, []);
    tagIndex.get(key).push(name);
  }

  icons[name] = {
    id,
    path: rel,
    hash: h,
    tags
  };
}

const index = {
  version: VERSION,
  schemaVersion: 1,
  iconCount: files.length,
  icons: Object.keys(icons).sort().map(name => ({ name, id: icons[name].id, tags: icons[name].tags, path: icons[name].path, hash: icons[name].hash }))
};

const shards = new Map();
for (const [name, item] of Object.entries(icons)) {
  const key = shardKey(name);
  if (!shards.has(key)) shards.set(key, {});
  shards.get(key)[name] = { id: item.id, path: item.path, hash: item.hash };
}

const tagIndexObject = {};
for (const [tag, names] of [...tagIndex.entries()].sort((a, b) => a[0].localeCompare(b[0]))) tagIndexObject[tag] = [...new Set(names)].sort();

const manifest = {
  version: VERSION,
  schemaVersion: 1,
  library: 'Delluna',
  variants: VARIANTS,
  motions: MOTIONS,
  iconCount: files.length,
  folderCount: folders.size,
  shardAlgorithm: 'name-prefix-v2',
  shards: [...shards.keys()].sort(),
  files: {
    index: 'registry/index.json',
    tags: 'registry/tags.json',
    shards: 'registry/shards/{first-normalized-char}.json'
  }
};

fs.rmSync(dist, { recursive: true, force: true });
fs.rmSync(registryDir, { recursive: true, force: true });
fs.rmSync(path.join(root, 'registry.json'), { force: true });
fs.mkdirSync(path.join(dist, 'icons'), { recursive: true });
fs.mkdirSync(path.join(dist, 'esm'), { recursive: true });
fs.mkdirSync(path.join(registryDir, 'shards'), { recursive: true });

for (const [key, shardIcons] of shards) {
  writeJSON(path.join(registryDir, 'shards', `${key}.json`), {
    version: VERSION,
    schemaVersion: 1,
    icons: shardIcons
  });
}
writeJSON(path.join(registryDir, 'index.json'), index);
writeJSON(path.join(registryDir, 'tags.json'), {
  version: VERSION,
  schemaVersion: 1,
  tags: tagIndexObject
});
writeJSON(path.join(registryDir, 'manifest.json'), {
  ...manifest
});

for (const file of files) {
  const rel = path.relative(srcIcons, file).replaceAll(path.sep, '/');
  const name = path.basename(rel, '.svg');
  const item = icons[name];
  const raw = fs.readFileSync(file, 'utf8');

  const out = path.join(dist, 'icons', rel);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  const withId = /data-delluna-id=/i.test(raw) ? raw : raw.replace(/<svg(\s|>)/i, `<svg data-delluna-id="${item.id}"$1`);
  fs.writeFileSync(out, withId);

  // Public ESM entry points are flat because the filename is the public icon name.
  const esmPath = path.join(dist, 'esm', `${name}.mjs`);
  const relativeSvgUrl = `../icons/${rel.split('/').map(encodeURIComponent).join('/')}`;
  fs.writeFileSync(esmPath,
    `export const name=${JSON.stringify(name)};\n` +
    `export const id=${JSON.stringify(item.id)};\n` +
    `export const url=new URL(${JSON.stringify(relativeSvgUrl + `?v=${item.hash}`)},import.meta.url).href;\n` +
    `export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(\`Delluna icon fetch failed: HTTP \${r.status}\`);return r.text()})}\n` +
    `const icon={name,id,url,svg};\n` +
    `export default icon;\n`
  );
}

fs.writeFileSync(path.join(dist, 'index.json'), JSON.stringify({ version: VERSION, iconCount: files.length, variants: VARIANTS, motions: MOTIONS }, null, 2) + '\n');
fs.writeFileSync(path.join(dist, 'duplicates.json'), JSON.stringify({ duplicates }, null, 2) + '\n');
fs.writeFileSync(path.join(dist, 'motion.json'), JSON.stringify({ version: 1, motions: MOTIONS }, null, 2) + '\n');
fs.copyFileSync(path.join(root, 'runtime/delluna.js'), path.join(dist, 'delluna.js'));
fs.writeFileSync(path.join(dist, 'delluna-full.js'), generateFullRuntime(files));
fs.copyFileSync(path.join(root, 'runtime/delluna.css'), path.join(dist, 'delluna.css'));
fs.writeFileSync(path.join(dist, '_headers'), `/*\n  Access-Control-Allow-Origin: *\n  Access-Control-Allow-Methods: GET, HEAD, OPTIONS\n  Access-Control-Allow-Headers: *\n  Cache-Control: public, max-age=31536000, immutable\n\n/registry/*\n  Cache-Control: public, max-age=300, must-revalidate\n`);

if (warnings.length) {
  console.warn(`Delluna bootstrap warnings: ${warnings.length} icons do not yet have src/metadata/<name>.json.`);
  if (warnings.length <= 20) warnings.forEach(w => console.warn(`  - ${w}`));
}
if (process.argv.includes('--check')) {
  console.log(`Validated ${files.length} source SVGs without modifying source files.`);
  process.exit(0);
}
console.log(`Delluna V10: ${files.length} source icons, ${seenIds.size} unique IDs, ${Object.keys(tagIndexObject).length} tags.`);

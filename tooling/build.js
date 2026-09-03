const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const root = path.resolve(__dirname, '..');
const src = path.join(root, 'src/icons');
const dist = path.join(root, 'dist');
const regDir = path.join(root, 'registry');
const regPath = path.join(regDir, 'icons.json');
const rootRegPath = path.join(root, 'registry.json');

function loadPreviousRegistry() {
  if (fs.existsSync(regPath)) return JSON.parse(fs.readFileSync(regPath, 'utf8'));
  const manifestPath = path.join(regDir, 'manifest.json');
  if (!fs.existsSync(manifestPath)) return { icons: {}, aliases: {} };
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  const icons = {}, aliases = {};
  for (const key of (manifest.shards || [])) {
    const shardPath = path.join(regDir, 'shards', `${key}.json`);
    if (!fs.existsSync(shardPath)) continue;
    const shard = JSON.parse(fs.readFileSync(shardPath, 'utf8'));
    Object.assign(icons, shard.icons || {});
    Object.assign(aliases, shard.aliases || {});
  }
  return { ...manifest, icons, aliases };
}
const old = loadPreviousRegistry();
const variants = old.variants || ['og', 'hud', 'orbit', 'circuit', 'plasma'];
const styles = old.styles || ['single', 'outline', 'fill', 'solid', 'duotone', 'duocolor'];
const motions = old.motions || ['none', 'pulse', 'spin', 'bounce', 'shake', 'wiggle', 'float', 'draw'];
const aliases = old.aliases || {};
const configuredFolders = new Set((old.folders || []).map(String).filter(Boolean));
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

function isSafeSVG(value) {
  let text = String(value || "");
  text = text.replace(/^\s*(?:<\?xml[^>]*\?>\s*)+/i, "").replace(/<!--[\s\S]*?-->/g, "");
  if (!/^\s*<svg\b/i.test(text) || !/<\/svg>\s*$/i.test(text)) return false;
  if (/<\s*(script|foreignObject|iframe|object|embed|audio|video|image|symbol)\b/i.test(text)) return false;
  if (/\son[a-z0-9:_-]*\s*=|javascript\s*:/i.test(text)) return false;
  const allowedTags = new Set(["svg","g","path","circle","rect","ellipse","line","polyline","polygon","text","tspan","title","desc","metadata","defs","clippath","mask","lineargradient","radialgradient","stop","pattern","filter","fegaussianblur","feoffset","fecolormatrix","use","style"]);
  const allowedAttrs = new Set(["viewbox","data-delluna-id","fill","stroke","stroke-width","stroke-linecap","stroke-linejoin","cx","cy","r","x","y","x1","y1","x2","y2","width","height","rx","ry","d","points","font-size","font-family","font-weight","fill-rule","clip-rule","opacity","fill-opacity","stroke-opacity","stroke-miterlimit","transform","transform-origin","vector-effect","xmlns","xmlns:xlink","aria-hidden","role","id","class","href","xlink:href","offset","stop-color","stop-opacity","gradientunits","gradienttransform","patternunits","patterncontentunits","preserveaspectratio","enable-background","filterunits","primitiveunits","result","in","in2","stddeviation","type","values","style","display","visibility","color-interpolation-filters"]);
  const tagPattern = /<\/?([a-zA-Z][\w:-]*)(?:\s+[^<>]*?)?\/?\s*>/g;
  const stack = []; let match; let count = 0;
  while ((match = tagPattern.exec(text))) {
    const tag = match[1].toLowerCase(); const raw = match[0];
    if (!allowedTags.has(tag)) return false;
    if (raw.startsWith("</")) { if (stack.pop() !== tag) return false; continue; }
    count++;
    const attrs = raw.replace(/^<\s*[a-zA-Z][\w:-]*/, "").replace(/\/?\s*>$/, "");
    const attrPattern = /([a-zA-Z_:][\w:.-]*)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/g; let a; let last = 0;
    while ((a = attrPattern.exec(attrs))) {
      if (attrs.slice(last, a.index).trim()) return false; last = attrPattern.lastIndex;
      const n = a[1].toLowerCase(), v = String(a[2] ?? a[3] ?? a[4] ?? "").trim();
      if (!allowedAttrs.has(n)) return false;
      if (!["xmlns", "xmlns:xlink"].includes(n) && /^(?:javascript:|data:|https?:|\/\/)/i.test(v)) return false;
      if ((n === "href" || n === "xlink:href") && !/^#[\w:.-]+$/.test(v)) return false;
      if (n === "style" && /(?:@import|javascript:|expression\s*\(|url\s*\(\s*(?:https?:|data:|\/\/))/i.test(v)) return false;
      if (/url\s*\(/i.test(v) && !/^url\(\s*#[-\w:.]+\s*\)$/i.test(v)) return false;
    }
    if (attrs.slice(last).trim()) return false;
    if (!raw.endsWith("/>") && !["path","circle","rect","ellipse","line","polyline","polygon","stop","use","fegaussianblur","feoffset","fecolormatrix"].includes(tag)) stack.push(tag);
  }
  return count > 0 && stack.length === 0;
}
function validSourcePath(rel) {
  return /^[A-Za-z0-9][A-Za-z0-9._-]*(?:\/[A-Za-z0-9][A-Za-z0-9._-]*)*\.svg$/u.test(rel) && !rel.split('/').some(x => x === '.' || x === '..' || x.endsWith('.'));
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

function addFolderAncestors(set, rel) {
  const parts = rel.split('/');
  for (let i = 1; i < parts.length; i++) set.add(parts.slice(0, i).join('/'));
}

function ensureUniqueId(id, usedIds, rel) {
  if (!usedIds.has(id)) return id;
  throw new Error(`Duplicate Delluna ID ${id} in ${rel}. IDs must be unique.`);
}

function writeJSON(file, value) {
  fs.writeFileSync(file, JSON.stringify(value, null, 2) + '\n');
}


function shardKey(name) {
  const value = String(name || '').toLowerCase();
  const alphabet = '0123456789abcdefghijklmnopqrstuvwxyz_-';
  return alphabet.includes(value[0]) ? value[0] : '_';
}

function writeRegistryShards(registry) {
  const dir = path.join(regDir, 'shards');
  fs.rmSync(dir, { recursive: true, force: true });
  fs.mkdirSync(dir, { recursive: true });
  const shards = new Map();
  for (const [name, item] of Object.entries(registry.icons || {})) {
    const key = shardKey(name);
    if (!shards.has(key)) shards.set(key, { version: registry.version, library: registry.library, icons: {}, aliases: {} });
    if (item && item.aliasOf) shards.get(key).aliases[name] = item.aliasOf;
    else shards.get(key).icons[name] = item;
  }
  for (const [key, value] of shards) writeJSON(path.join(dir, key + '.json'), value);
  const serialized = JSON.stringify(registry, null, 2) + '\n';
  writeJSON(path.join(regDir, 'manifest.json'), { version: registry.version, schemaVersion: registry.schemaVersion || registry.version, library: registry.library, variants: registry.variants || [], styles: registry.styles || [], motions: registry.motions || [], folders: registry.folders || [], shardAlgorithm: 'name-prefix-v2', shardPattern: 'registry/shards/{first-normalized-char}.json', shards: [...shards.keys()].sort(), iconCount: Object.values(registry.icons || {}).filter(x => !x.aliasOf).length, generatedAt: registry.generatedAt, registryHash: hash(serialized) });
}
function sourceForFullBundle(raw) {
  // The full runtime intentionally contains the raw source artwork without
  // registry-only IDs. IDs are injected into dist/icons/*.svg, not the
  // embedded full bundle, so both distribution forms render the same art.
  return String(raw)
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/\sdata-delluna-id=["'][^"']*["']/gi, '')
    .trim();
}

function generateFullRuntime(files) {
  const templatePath = path.join(root, 'runtime', 'delluna-full.js');
  const template = fs.readFileSync(templatePath, 'utf8');
  const marker = 'var ICONS_RAW = ';
  const start = template.indexOf(marker);
  const geometry = start >= 0 ? template.indexOf('\n  // ---- geometry', start) : -1;
  const end = geometry >= 0 ? template.lastIndexOf('};', geometry) + 1 : -1;
  if (start < 0 || end < 0) {
    throw new Error('runtime/delluna-full.js is missing the ICONS_RAW template marker');
  }
  const embedded = {};
  for (const file of files) {
    const rel = path.relative(src, file).replaceAll(path.sep, '/');
    const name = path.basename(rel, '.svg');
    embedded[name] = sourceForFullBundle(fs.readFileSync(file, 'utf8'));
  }
  return template.slice(0, start) + marker + JSON.stringify(embedded) + template.slice(end);
}


function styleSvg(raw, style, secondary='#7c818a') {
  const text = clean(raw);
  const open = text.match(/^<svg\b([^>]*)>([\s\S]*)<\/svg>\s*$/i);
  if (!open) return text;
  const attrs = open[1].replace(/\s*data-delluna-id=["'][^"']*["']/gi,'').trim();
  let inner = open[2];
  const normalize = (s) => s
    .replace(/\s*fill=["'](?:none|#[0-9a-f]{3,8}|rgba?\([^)]*\)|[a-z]+)["']/gi, '')
    .replace(/\s*stroke=["'](?:none|#[0-9a-f]{3,8}|rgba?\([^)]*\)|[a-z]+)["']/gi, '')
    .replace(/\s*style=["'][^"']*["']/gi, '');
  const base = normalize(inner);
  const wrap = (body, extra='') => `<svg viewBox="${viewBox(attrs)}" ${extra}>${body}</svg>`;
  if (style === 'outline') return wrap(inner, 'fill="none" stroke="currentColor"');
  if (style === 'single') return wrap(base, 'color="currentColor"');
  if (style === 'fill') {
    const body = base.replace(/<([a-z][\w:-]*)([^>]*)>/gi, (m,t,a) => { const self=/\/\s*$/.test(a); const attrs=a.replace(/\/\s*$/,''); return `<${t}${attrs} fill="currentColor" stroke="none"${self?'/':''}>`; });
    return wrap(body);
  }
  if (style === 'solid') {
    const body = base.replace(/stroke-width=["']([\d.]+)["']/gi, (_,v)=>`stroke-width="${(Number(v)*1.65).toFixed(2)}"`)
      .replace(/<([a-z][\w:-]*)([^>]*)>/gi, (m,t,a) => { const self=/\/\s*$/.test(a); const attrs=a.replace(/\/\s*$/,''); return `<${t}${attrs} fill="currentColor"${self?'/':''}>`; });
    return wrap(body);
  }
  if (style === 'duotone') {
    return wrap(`<g opacity="0.18">${base}</g><g>${base}</g>`);
  }
  if (style === 'duocolor') {
    return wrap(`<g style="color:${secondary}">${base}</g><g opacity="0.95">${base}</g>`);
  }
  return wrap(inner);
}
function viewBox(attrs){
  return (attrs.match(/\bviewBox=["']([^"']+)["']/i)||[])[1] || '0 0 24 24';
}

const files = walk(src);
const registry = {
  version: 9,
  library: old.library || 'Delluna',
  variants,
  styles,
  motions,
  folders: [...configuredFolders].sort(),
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
  if (rel.includes('/')) addFolderAncestors(configuredFolders, rel);
  const raw = fs.readFileSync(file, 'utf8');
  if (!validSourcePath(rel)) throw new Error(`Invalid icon path: ${rel}`);
  if (!/<svg\b[^>]*>/i.test(raw) || !/<\/svg>\s*$/i.test(raw.trim()) || !isSafeSVG(raw)) {
    throw new Error(`Invalid or unsafe SVG: ${rel}`);
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
    styles: previous?.styles || styles.slice(),
    motions: previous?.motions || ['none', 'pulse', 'spin', 'bounce', 'shake', 'wiggle', 'float', 'draw'],
    hash: h,
    updatedAt
  };

  const oldSame = oldIcons.find(x => x.hash && x.hash === h && x.id !== id);
  if (oldSame) duplicates.push({ path: rel, duplicateOf: oldSame.path, id });
}

registry.folders = [...configuredFolders].sort();

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
for (const style of styles) fs.mkdirSync(path.join(dist, 'styles', style, 'icons'), { recursive: true });

for (const file of files) {
  const rel = path.relative(src, file).replaceAll(path.sep, '/');
  if (rel.includes('/')) addFolderAncestors(configuredFolders, rel);
  const raw = fs.readFileSync(file, 'utf8');
  for (const style of styles) {
    const styled = styleSvg(raw, style);
    const styledPath = path.join(dist, 'styles', style, 'icons', rel);
    fs.mkdirSync(path.dirname(styledPath), { recursive: true });
    fs.writeFileSync(styledPath, styled + '\n');
  }

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
  const esmPath = path.join(dist, 'esm', rel.replace(/\.svg$/i, '.js'));
  fs.mkdirSync(path.dirname(esmPath), { recursive: true });
  const relativeSvgUrl = `${'../'.repeat(rel.split('/').length)}icons/${rel}`;
  const versionQuery = item.hash ? `?v=${encodeURIComponent(item.hash)}` : '';
  fs.writeFileSync(
    esmPath,
    `export const name=${JSON.stringify(item.name)};\nexport const id=${JSON.stringify(item.id)};\nexport const url=new URL(${JSON.stringify(relativeSvgUrl + '${VERSION_PLACEHOLDER}')},import.meta.url).href;\nexport async function svg(){return fetch(url).then(r=>r.text())}\n`.replace('${VERSION_PLACEHOLDER}', versionQuery)
  );
}

writeRegistryShards(registry);
const legacyRegistryJson = JSON.stringify(registry, null, 2) + '\n';
const LEGACY_REGISTRY_MAX_BYTES = 80 * 1024 * 1024;
const legacyAllowed = Buffer.byteLength(legacyRegistryJson, 'utf8') <= LEGACY_REGISTRY_MAX_BYTES;
if (legacyAllowed) {
  fs.writeFileSync(regPath, legacyRegistryJson);
  fs.writeFileSync(rootRegPath, legacyRegistryJson);
} else {
  fs.rmSync(regPath, { force: true });
  fs.rmSync(rootRegPath, { force: true });
}
const distShardDir = path.join(dist, 'registry', 'shards');
fs.rmSync(path.join(dist, 'registry'), { recursive: true, force: true });
fs.mkdirSync(distShardDir, { recursive: true });
fs.cpSync(path.join(regDir, 'shards'), distShardDir, { recursive: true });
fs.copyFileSync(path.join(regDir, 'manifest.json'), path.join(dist, 'registry', 'manifest.json'));
if (legacyAllowed) fs.writeFileSync(path.join(dist, 'registry.json'), legacyRegistryJson);
writeJSON(path.join(dist, 'duplicates.json'), { duplicates });
writeJSON(path.join(dist, 'motion.json'), { version: 1, motions: { none:{label:'None',description:'Static icon'}, pulse:{label:'Pulse',description:'Gentle scale pulse'}, spin:{label:'Spin',description:'Continuous rotation'}, bounce:{label:'Bounce',description:'Soft vertical bounce'}, shake:{label:'Shake',description:'Short attention shake'}, wiggle:{label:'Wiggle',description:'Small rotational wiggle'}, float:{label:'Float',description:'Slow floating motion'}, draw:{label:'Draw',description:'Outline draw-in where supported'} } });
fs.copyFileSync(path.join(root, 'runtime', 'delluna.js'), path.join(dist, 'delluna.js'));
fs.writeFileSync(path.join(dist, 'delluna-full.js'), generateFullRuntime(files));
fs.copyFileSync(path.join(root, 'runtime', 'delluna.css'), path.join(dist, 'delluna.css'));
fs.writeFileSync(path.join(dist, '_headers'), `/*\n  Access-Control-Allow-Origin: *\n  Access-Control-Allow-Methods: GET, HEAD, OPTIONS\n  Access-Control-Allow-Headers: *\n  Cache-Control: public, max-age=31536000, immutable\n\n/registry.json\n  Cache-Control: public, max-age=60, must-revalidate\n`);

if (process.argv.includes('--check')) {
  if (duplicates.length) console.warn(`Exact duplicate artwork: ${duplicates.length}`);
  else console.log('No exact duplicate artwork.');
  console.log(`Validated ${files.length} source SVGs without modifying source files.`);
  process.exit(0);
}

console.log(`Delluna V9: ${files.length} source icons, ${changed.length} changed, ${duplicates.length} exact duplicate artwork matches.`);

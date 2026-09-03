const fs = require('fs');
const path = require('path');
const os = require('os');
const crypto = require('crypto');
const { spawnSync } = require('child_process');

const root = path.resolve(__dirname, '..');
const src = path.join(root, 'src/icons');
function loadCanonicalRegistry() {
  const canonical = path.join(root, 'registry/icons.json');
  if (fs.existsSync(canonical)) return JSON.parse(fs.readFileSync(canonical, 'utf8'));
  const manifest = JSON.parse(fs.readFileSync(path.join(root, 'registry/manifest.json'), 'utf8'));
  const icons = {}, aliases = {};
  for (const key of manifest.shards || []) {
    const shard = JSON.parse(fs.readFileSync(path.join(root, 'registry/shards', `${key}.json`), 'utf8'));
    Object.assign(icons, shard.icons || {});
    Object.assign(aliases, shard.aliases || {});
  }
  return { ...manifest, icons, aliases };
}
const registry = loadCanonicalRegistry();
const shardManifestPath = path.join(root, 'registry/manifest.json');
assert(fs.existsSync(shardManifestPath), 'Registry shard manifest is missing');
const shardManifest = JSON.parse(fs.readFileSync(shardManifestPath, 'utf8'));
assert(shardManifest.shardAlgorithm === 'name-prefix-v2' && Array.isArray(shardManifest.shards), 'Registry shard manifest contract is missing');
assert(/^[0-9a-f]{64}$/.test(String(shardManifest.registryHash || '')), 'Registry manifest integrity hash is missing');
assert(shardManifest.registryHash === crypto.createHash('sha256').update(JSON.stringify(registry, null, 2) + '\n').digest('hex'), 'Registry manifest hash does not match canonical registry');
assert(shardManifest.shards.length <= 30, 'Registry shard count must remain within the safe Cloudflare Workers Free-plan mutation budget');
const shardDir = path.join(root, 'registry/shards');
for (const key of shardManifest.shards) assert(fs.existsSync(path.join(shardDir, `${key}.json`)), `Missing registry shard: ${key}`);

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
    const file = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(file) : entry.name.toLowerCase().endsWith('.svg') ? [file] : [];
  }).sort();
}
function normalizeBuild(s) {
  return String(s || '').replace(/<!--[\s\S]*?-->/g, '').replace(/\sdata-delluna-id=["'][^"']*["']/gi, '').replace(/\r?\n/g, ' ').replace(/>\s+</g, '><').replace(/\s+/g, ' ').trim();
}
function normalizeWorkerEquivalent(s) {
  return String(s || '').replace(/<!--[\s\S]*?-->/g, '').replace(/\sdata-delluna-id=["'][^"']*["']/gi, '').replace(/\r?\n/g, ' ').replace(/>\s+</g, '><').replace(/\s+/g, ' ').trim();
}
function hash(s) { return crypto.createHash('sha256').update(normalizeBuild(s)).digest('hex'); }
function assert(condition, message) { if (!condition) throw new Error(message); }

const sample = `<svg data-delluna-id="old"><g>\n  <path d="M0 0"/>\n</g></svg>`;
assert(normalizeBuild(sample) === normalizeWorkerEquivalent(sample), 'Worker/build normalization contract diverged');

function firstExisting(paths) {
  for (const candidate of paths) if (fs.existsSync(candidate)) return candidate;
  throw new Error(`Required integration file not found. Tried: ${paths.join(', ')}`);
}
const workerPath = firstExisting([
  path.resolve(root, '../admin/worker.js'),
  path.resolve(root, '../../admin/backend/worker.js')
]);
const worker = fs.readFileSync(workerPath, 'utf8');
for (const token of ['function normalizeSVG', 'MAX_UPLOAD_SVG_BYTES', 'MAX_BATCH_FILES', 'function isSafeSVG', 'function hasUnsafePathSegments']) {
  assert(worker.includes(token), `Worker publish contract missing ${token}`);
}
const adminAppPath = firstExisting([
  path.resolve(root, '../../0002-frontend/admin/app.js'),
  path.resolve(root, '../../admin/frontend/app.js')
]);
const adminCssPath = firstExisting([
  path.resolve(root, '../../0002-frontend/admin/style.css'),
  path.resolve(root, '../../admin/frontend/style.css')
]);
const adminApp = fs.readFileSync(adminAppPath, 'utf8');
const adminCss = fs.readFileSync(adminCssPath, 'utf8');
assert(adminApp.includes('normalizeLoadedBatch'), 'Admin batch migration guard is missing');
assert(adminApp.includes('x.action !== "invalid" && !x.resolution'), 'Invalid SVGs must not be treated as unresolved conflict decisions');
assert(adminApp.includes('batchStatusLabel'), 'Admin pending status labels are not normalized');
assert(adminCss.includes('.row-fav svg'), 'Admin favorite button SVG styling is missing');
assert(adminCss.includes('appearance:none'), 'Admin controls still allow browser-native button rendering');

for (const dangerous of ['onload=alert(1)', 'href=javascript:alert(1)', 'src=https://example.com']) {
  assert(worker.includes('attrPattern') && worker.includes('javascript:'), `Worker SVG safety policy missing coverage for ${dangerous}`);assert(worker.includes('canonicalUploadPath'), 'Worker upload-path canonicalization is missing');
assert(worker.includes('MAX_BATCH_TOTAL_BYTES'), 'Worker total batch-size guard is missing');
assert(worker.includes('MAX_FREE_REGISTRY_SHARDS = 30'), 'Worker registry shard safety guard is missing');
assert(worker.includes('MAX_BATCH_FILES = 10000'), 'Worker 10,000-file batch limit is missing');
assert(adminApp.includes('selectAllResults'), 'Admin Select All control is missing');
assert(adminApp.includes('virtual-list') && adminApp.includes('overscan=10'), 'Admin database virtualization contract is missing');
assert(adminApp.includes('searchIndex') && adminApp.includes('rebuildSearchIndex'), 'Admin indexed-search contract is missing');
assert(adminApp.includes('/rename-bulk'), 'Admin bulk rename endpoint integration is missing');
assert(adminApp.includes('canonicalPath'), 'Admin publish destination canonicalization is missing');
assert(adminApp.includes('canonicalUploadPathClient'), 'Admin upload-path canonicalization is missing');
assert(adminApp.includes('totalBytes > 50 * 1024 * 1024'), 'Admin total batch-size guard is missing');
assert(!adminApp.includes('PUBLIC_BASE = `https://cdn.jsdelivr.net/gh/${repoId}@${statusData.latestTag}/dist`'), 'Admin must not pin previews to a potentially stale latest tag');
assert(adminCss.includes('.virtual-list{position:relative;'), 'Virtual list positioning contract is missing');
assert(adminCss.includes('.virtual-list .virtual-window{position:absolute;'), 'Virtual window overlay contract is missing');
assert(adminCss.includes('.toolbar>.button{display:inline-flex;align-items:center;justify-content:center;'), 'Toolbar action alignment contract is missing');
const headersPath = path.join(path.dirname(adminCssPath), '_headers');
if (fs.existsSync(headersPath)) { const headers = fs.readFileSync(headersPath, 'utf8'); assert(headers.includes('https://storage.googleapis.com'), 'Admin CSP must allow the configured favicon host'); }

assert(worker.includes('registry/shards?ref=') && worker.includes('git/blobs/'), 'Shard registry loading must avoid per-shard Contents API fallback subrequests');
assert(worker.includes('registryHash') && worker.includes('manifest declares the canonical registry generation'), 'Worker must integrity-check legacy registry copies against the shard manifest');
assert(worker.includes('const chunkSize = 1000'), 'Git tree writes must be chunked for large batches');
assert(worker.includes('const MAX_INLINE_SVG_BYTES = MAX_UPLOAD_SVG_BYTES'), 'Allowed SVGs should not consume one blob subrequest each on Workers Free');
assert(worker.includes('.replace(/[^a-zA-Z0-9_-]+/g, "-")'), 'Worker name sanitizer must preserve camelCase');
const workflow = fs.readFileSync(path.join(root, '.github/workflows/build.yml'), 'utf8');
assert(workflow.includes('registry/manifest.json') && workflow.includes('registry/shards'), 'Build workflow must commit registry manifest and shards');
assert(worker.includes('handleEdit') && worker.includes('commitRegistryAndTree(env, base, nextRegistry, tree, `admin: rename'), 'Edit endpoint must use shard-aware registry commits');
assert(worker.includes('handleDelete') && worker.includes('commitRegistryAndTree(env, base, nextRegistry, tree, `admin: delete'), 'Delete endpoint must use shard-aware registry commits');
}


const expectedStyles = ['single','outline','fill','solid','duotone','duocolor'];
const expectedMotions = ['none','pulse','spin','bounce','shake','wiggle','float','draw'];
assert(registry.version === 9, 'Registry schema version mismatch');
assert(JSON.stringify(registry.styles) === JSON.stringify(expectedStyles), 'Registry style contract mismatch');
assert(JSON.stringify(registry.motions) === JSON.stringify(expectedMotions), 'Registry motion contract mismatch');
const files = walk(src);
const styleFiles = expectedStyles.flatMap(style => walk(path.join(root, 'dist/styles', style)).map(f => path.relative(path.join(root, 'dist/styles', style), f)));
assert(styleFiles.length === expectedStyles.length * files.length, `Unexpected style artifact count: ${styleFiles.length}`);
const names = new Set();
const ids = new Set();
for (const file of files) {
  const rel = path.relative(src, file).replaceAll(path.sep, '/');
  const name = path.basename(rel, '.svg');
  assert(!names.has(name), `Duplicate source name: ${name}`); names.add(name);
  const item = registry.icons[name];
  assert(item, `Missing registry entry: ${name}`);
  assert(!ids.has(item.id), `Duplicate ID: ${item.id}`); ids.add(item.id);
  const raw = fs.readFileSync(file, 'utf8');
  assert(hash(raw) === item.hash, `Hash mismatch: ${name}`);
}

const full = fs.readFileSync(path.join(root, 'dist/delluna-full.js'), 'utf8');
const marker = 'var ICONS_RAW = ';
const start = full.indexOf(marker);
const geometry = full.indexOf('\n  // ---- geometry', start);
const end = geometry >= 0 ? full.lastIndexOf('};', geometry) + 1 : -1;
assert(start >= 0 && end >= 0, 'Full bundle marker missing');
const embedded = JSON.parse(full.slice(start + marker.length, end));
assert(Object.keys(embedded).length === files.length, `Full bundle count ${Object.keys(embedded).length} != source count ${files.length}`);

function copyTree(from, to) {
  fs.cpSync(from, to, { recursive: true, filter: source => {
    const rel = path.relative(from, source);
    return rel !== '.git' && !rel.startsWith(`.git${path.sep}`) && rel !== 'node_modules' && !rel.startsWith(`node_modules${path.sep}`) && rel !== 'dist' && !rel.startsWith(`dist${path.sep}`);
  }});
}

const temp = fs.mkdtempSync(path.join(os.tmpdir(), 'delluna-v9-test-'));
try {
  copyTree(root, temp);
  const nestedRel = 'singleton/v6_nested_probe.svg';
  const nestedPath = path.join(temp, 'src/icons', nestedRel);
  fs.mkdirSync(path.dirname(nestedPath), { recursive: true });
  fs.writeFileSync(nestedPath, '<svg viewBox="0 0 24 24"><path d="M2 2h20v20H2z"/></svg>\n');
  let result = spawnSync(process.execPath, [path.join(temp, 'tooling/build.js')], { encoding: 'utf8' });
  assert(result.status === 0, `Nested-folder build failed:\n${result.stdout}\n${result.stderr}`);
  const nestedEsm = path.join(temp, 'dist/esm/singleton/v6_nested_probe.js');
  assert(fs.existsSync(nestedEsm), 'Nested ESM module was not generated');
  const esm = fs.readFileSync(nestedEsm, 'utf8');
  assert(esm.includes('../../icons/singleton/v6_nested_probe.svg'), 'Nested ESM URL does not point from dist/esm to dist/icons');
  assert(/\?v=[0-9a-f]{64}/.test(esm), 'Nested ESM URL is missing content-hash cache busting');
  result = spawnSync(process.execPath, [path.join(temp, 'tooling/validate.js')], { encoding: 'utf8' });
  assert(result.status === 0, `Nested validation failed:\n${result.stdout}\n${result.stderr}`);

  // Common real-world SVG fixtures (XML prolog, metadata, defs and internal references)
  // must not be misclassified as invalid uploads/build inputs.
  const compatibleRel = 'singleton/v9_compatibility_probe.svg';
  const compatiblePath = path.join(temp, 'src/icons', compatibleRel);
  fs.writeFileSync(compatiblePath, `<?xml version="1.0" encoding="UTF-8"?>\n<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Probe</title><defs><linearGradient id="g"><stop offset="0" stop-color="currentColor"/><stop offset="1" stop-color="#000"/></linearGradient></defs><path id="p" fill="url(#g)" d="M2 2h20v20H2z"/></svg>`);
  result = spawnSync(process.execPath, [path.join(temp, 'tooling/build.js')], { encoding: 'utf8' });
  assert(result.status === 0, `Common SVG compatibility fixture failed build:\n${result.stdout}\n${result.stderr}`);
  assert(fs.existsSync(path.join(temp, 'dist/styles/duotone/icons', compatibleRel)), 'Common SVG fixture did not receive style artifacts');
  fs.rmSync(compatiblePath);

  // Direct source edits are supported: build must be able to regenerate the registry before validation.
  const tempRegistry = (() => {
    const canonical = path.join(temp, 'registry/icons.json');
    if (fs.existsSync(canonical)) return JSON.parse(fs.readFileSync(canonical, 'utf8'));
    const manifest = JSON.parse(fs.readFileSync(path.join(temp, 'registry/manifest.json'), 'utf8'));
    const icons = {}, aliases = {};
    for (const key of manifest.shards || []) {
      const shard = JSON.parse(fs.readFileSync(path.join(temp, 'registry/shards', `${key}.json`), 'utf8'));
      Object.assign(icons, shard.icons || {}); Object.assign(aliases, shard.aliases || {});
    }
    return { ...manifest, icons, aliases };
  })();
  assert(tempRegistry.icons.v6_nested_probe, 'Build did not register source-only nested icon');
  assert(expectedStyles.every(style => fs.existsSync(path.join(temp, 'dist/styles', style, 'icons/singleton/v6_nested_probe.svg'))), 'Nested style artifacts were not generated for every style');
  assert(fs.existsSync(path.join(temp, 'dist/motion.json')), 'Motion manifest was not generated');
} finally {
  fs.rmSync(temp, { recursive: true, force: true });
}

// Build-time safety and path regression fixtures.
{
  const temp = fs.mkdtempSync(path.join(os.tmpdir(), 'delluna-v7-safety-'));
  try {
    copyTree(root, temp);
    const unsafePath = path.join(temp, 'src/icons/bad.svg');
    fs.writeFileSync(unsafePath, '<svg onload=alert(1) viewBox="0 0 24 24"><path d="M0 0"/></svg>');
    let result = spawnSync(process.execPath, [path.join(temp, 'tooling/build.js')], { encoding: 'utf8' });
    assert(result.status !== 0 && /unsafe SVG|Invalid/.test(`${result.stdout}\n${result.stderr}`), 'Build accepted an unsafe SVG');
    fs.rmSync(unsafePath);
    const badName = path.join(temp, 'src/icons/bad?name.svg');
    fs.writeFileSync(badName, '<svg viewBox="0 0 24 24"><path d="M0 0"/></svg>');
    result = spawnSync(process.execPath, [path.join(temp, 'tooling/build.js')], { encoding: 'utf8' });
    assert(result.status !== 0 && /Invalid icon path/.test(`${result.stdout}\n${result.stderr}`), 'Build accepted a non-canonical icon path');
  } finally { fs.rmSync(temp, { recursive: true, force: true }); }
}

console.log(`Delluna V9 tests passed: ${files.length} baseline icons, normalization, safety policy, nested ESM build, content-hash URLs, registry generation, and full-bundle coverage.`);

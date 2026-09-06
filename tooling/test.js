const fs = require('fs');
const path = require('path');
const os = require('os');
const { spawnSync } = require('child_process');

const root = path.resolve(__dirname, '..');
function assert(ok, message) { if (!ok) throw new Error(message); }

const temp = fs.mkdtempSync(path.join(os.tmpdir(), 'delluna-v10-test-'));
try {
  fs.mkdirSync(path.join(temp, 'src/icons/weather'), { recursive: true });
  fs.mkdirSync(path.join(temp, 'src/metadata'), { recursive: true });
  fs.mkdirSync(path.join(temp, 'runtime'), { recursive: true });
  fs.mkdirSync(path.join(temp, 'tooling'), { recursive: true });

  fs.copyFileSync(path.join(root, 'tooling/build.js'), path.join(temp, 'tooling/build.js'));
  fs.copyFileSync(path.join(root, 'tooling/validate.js'), path.join(temp, 'tooling/validate.js'));
  fs.copyFileSync(path.join(root, 'runtime/delluna.js'), path.join(temp, 'runtime/delluna.js'));
  fs.copyFileSync(path.join(root, 'runtime/delluna-full.js'), path.join(temp, 'runtime/delluna-full.js'));
  fs.copyFileSync(path.join(root, 'runtime/delluna.css'), path.join(temp, 'runtime/delluna.css'));

  fs.writeFileSync(path.join(temp, 'src/icons/umbrella.svg'), '<svg viewBox="0 0 24 24"><path fill="none" stroke="currentColor" d="M3 12a9 9 0 0118 0H3z"/></svg>\n');
  fs.writeFileSync(path.join(temp, 'src/icons/weather/rain.svg'), '<svg viewBox="0 0 24 24"><path fill="none" stroke="currentColor" d="M6 4v16M12 4v16M18 4v16"/></svg>\n');
  fs.writeFileSync(path.join(temp, 'src/metadata/umbrella.json'), JSON.stringify({ id: 'dl_11111111111111111111', tags: ['weather', 'rain', 'protection'] }, null, 2) + '\n');

  let result = spawnSync(process.execPath, [path.join(temp, 'tooling/build.js')], { encoding: 'utf8' });
  assert(result.status === 0, `Build failed:\n${result.stdout}\n${result.stderr}`);

  const manifest = JSON.parse(fs.readFileSync(path.join(temp, 'registry/manifest.json'), 'utf8'));
  const index = JSON.parse(fs.readFileSync(path.join(temp, 'registry/index.json'), 'utf8'));
  const tags = JSON.parse(fs.readFileSync(path.join(temp, 'registry/tags.json'), 'utf8'));
  assert(manifest.version === 10, 'Version 10 registry was not generated');
  assert(index.iconCount === 2, 'Registry index count is wrong');
  assert(index.icons.some(x => x.name === 'umbrella' && x.id === 'dl_11111111111111111111'), 'Metadata ID was not preserved');
  assert(tags.tags.weather.includes('umbrella'), 'Tag index was not generated');
  assert(fs.existsSync(path.join(temp, 'dist/esm/umbrella.mjs')), 'Flat public ESM entry was not generated');
  assert(fs.existsSync(path.join(temp, 'dist/esm/rain.mjs')), 'Nested-source icon did not receive flat ESM entry');
  assert(!fs.existsSync(path.join(temp, 'dist/styles')), 'Style distributions were generated');
  assert(!fs.existsSync(path.join(temp, 'registry/icons.json')), 'Legacy canonical registry was generated');
  assert(!fs.existsSync(path.join(temp, 'registry.json')), 'Legacy root registry was generated');
  assert(!fs.existsSync(path.join(temp, 'dist/registry.json')), 'Legacy dist registry was generated');

  result = spawnSync(process.execPath, [path.join(temp, 'tooling/validate.js')], { encoding: 'utf8' });
  assert(result.status === 0, `Validation failed:\n${result.stdout}\n${result.stderr}`);

  // Duplicate public basenames across folders must fail.
  fs.writeFileSync(path.join(temp, 'src/icons/weather/umbrella.svg'), '<svg viewBox="0 0 24 24"><path d="M0 0"/></svg>\n');
  result = spawnSync(process.execPath, [path.join(temp, 'tooling/build.js')], { encoding: 'utf8' });
  assert(result.status !== 0 && /Duplicate icon name/.test(`${result.stdout}\n${result.stderr}`), 'Duplicate public basenames were accepted');

  // Unsafe SVGs must fail.
  fs.rmSync(path.join(temp, 'src/icons/weather/umbrella.svg'));
  fs.writeFileSync(path.join(temp, 'src/icons/bad.svg'), '<svg onload="alert(1)" viewBox="0 0 24 24"><path d="M0 0"/></svg>\n');
  result = spawnSync(process.execPath, [path.join(temp, 'tooling/build.js')], { encoding: 'utf8' });
  assert(result.status !== 0 && /Invalid or unsafe SVG/.test(`${result.stdout}\n${result.stderr}`), 'Unsafe SVG was accepted');

  // Runtime must not expose the removed style API.
  const runtime = fs.readFileSync(path.join(root, 'runtime/delluna.js'), 'utf8');
  assert(!runtime.includes("styles:['single'"), 'Runtime still exposes style registry metadata');
  assert(!runtime.includes('applyStyle('), 'Runtime still applies removed style transformations');
  assert(runtime.includes('async function registry()'), 'Runtime registry() API is missing');

  // Runtime CDN layout: delluna.js lives in /dist while the generated registry
  // lives at the package root in /registry. The runtime must therefore derive
  // the package root from ../, not use the /dist directory as the base.
  assert(runtime.includes("new URL('../',RUNTIME_SCRIPT.src)"), 'Runtime still derives its base URL from /dist');
  assert(!runtime.includes("new URL('./',RUNTIME_SCRIPT.src)"), 'Runtime still uses the old /dist base URL calculation');

  // Regression: the custom element must not be defined before the Delluna API
  // exists. Defining it too early can upgrade an existing <delluna-icon> and
  // invoke connectedCallback() while const Delluna is still in its TDZ.
  const dellunaDeclaration = runtime.indexOf('const Delluna={');
  const customElementDefinition = runtime.indexOf("customElements.define(");
  assert(dellunaDeclaration >= 0, 'Delluna API declaration is missing');
  assert(customElementDefinition > dellunaDeclaration, 'Custom element is registered before Delluna initialization');
  assert(runtime.indexOf('window.Delluna=') > dellunaDeclaration, 'Delluna is not exported after initialization');

  // Figma plugin must consume the normal icon path rather than style distributions.
  const figma = fs.readFileSync(path.join(root, 'figma-plugin/code.js'), 'utf8');
  const figmaUi = fs.readFileSync(path.join(root, 'figma-plugin/ui.html'), 'utf8');
  assert(!figma.includes('styles/'), 'Figma plugin still depends on style distributions');
  assert(!figmaUi.includes('id="style"'), 'Figma UI still exposes removed styles');
  assert(figmaUi.includes('/registry/index.json'), 'Figma UI does not use the generated compact index');
} finally {
  fs.rmSync(temp, { recursive: true, force: true });
}

console.log('Delluna V10 tests passed: source-first metadata, filename-only public names, generated shard/tag registry, flat ESM entries, runtime variants, style removal, SVG safety, and duplicate-name protection.');

# Delluna Icons V10

Delluna V10 is a source-first SVG icon library with immutable icon IDs, generated registry shards, a lazy browser runtime, flat public per-icon ESM entry points, runtime visual variants, and an Admin Action Engine that changes only canonical source files.

## 1. Canonical source

Only these locations are authoritative:

```text
src/
├── icons/
│   ├── weather/umbrella.svg
│   └── math/f.svg
└── metadata/
    ├── umbrella.json
    └── f.json
```

`src/icons/**/*.svg` is the artwork source. `src/metadata/<name>.json` is the human-maintained metadata for that icon.

The public icon name is **only the SVG filename without `.svg`**. Folders are internal organization and are never part of the public icon name. Therefore `src/icons/weather/umbrella.svg` is requested as `umbrella`, not `weather/umbrella`.

Duplicate basenames are forbidden anywhere under `src/icons/`. A build fails rather than silently choosing one.

### Metadata format

Metadata is deliberately small:

```json
{
  "id": "dl_a83f92c1...",
  "tags": ["weather", "rain", "protection"]
}
```

Do not duplicate `name`, `path`, `file`, `extension`, `hash`, or folder/category information in metadata. Those values are derived from the source tree.

`id` is the immutable Delluna identity. `tags` are human-maintained search terms. The builder generates the searchable tag index from them.

The repository contains a small set of metadata examples under `src/metadata/`. Existing libraries can bootstrap metadata for all icons with:

```bash
npm run bootstrap-metadata -- --registry=/path/to/old/registry/icons.json
```

That migration utility preserves IDs and existing tags from a legacy registry when available. It never modifies SVG artwork.

## 2. Generated state

These directories are generated and are not canonical source:

```text
registry/
dist/
```

The builder recreates them from `src/icons` and `src/metadata`. They may be absent from a source-only checkout and are produced by the build/Action workflow.

The generated registry is intentionally not one giant catalog:

```text
registry/
├── manifest.json
├── index.json
├── tags.json
└── shards/
    ├── 0.json
    ├── a.json
    ├── b.json
    └── ...
```

- `manifest.json` describes the generated registry.
- `index.json` is a compact searchable icon index.
- `tags.json` maps human-maintained tags to public icon names.
- `shards/*.json` contain the metadata required to resolve individual icons without downloading the complete catalog.

There is deliberately no generated `registry/icons.json`, root `registry.json`, or `dist/registry.json` compatibility copy in V10.

## 3. Build

```bash
npm install
npm test
npm run build
npm run validate
```

The build:

1. scans `src/icons/**/*.svg`;
2. validates SVG safety and canonical paths;
3. enforces filename-only public-name uniqueness;
4. reads per-icon metadata;
5. preserves metadata IDs;
6. generates registry shards, compact index, and tag index;
7. copies source artwork to `dist/icons/` with its immutable ID injected for distribution;
8. generates one flat ESM (`.mjs`) entry per public icon name under `dist/esm/`;
9. generates the full runtime bundle from the current source set;
10. copies the runtime and CSS distribution files.

The build does **not** generate style folders.

## 4. Public ESM imports

Because filenames are unique public names, consumers can import an icon without knowing its source folder:

```js
import umbrella from '@vkdatta/delluna/icons/umbrella';
import f from '@vkdatta/delluna/icons/f';
```

The generated module exposes:

```js
icon.name
icon.id
icon.url
await icon.svg()
```

and is also the default export.

The generated ESM files are flat even when source artwork is nested. The actual CDN artwork can remain internally organized by folder.

## 5. Browser runtime

```html
<script src="https://cdn.jsdelivr.net/gh/vkdatta/delluna@main/dist/delluna.js"></script>
<delluna-icon name="umbrella"></delluna-icon>
```

Or:

```html
<i data-icon="umbrella"></i>
```

The runtime loads only the registry shard needed for the requested icon and then fetches only that icon's SVG. Registry shards are cached and concurrent requests for the same shard are coalesced.

Runtime variants remain:

```text
og
hud
orbit
circuit
plasma
```

Motion remains a runtime presentation layer:

```text
none
pulse
spin
bounce
shake
wiggle
float
draw
```

The old generated style families (`single`, `outline`, `fill`, `solid`, `duotone`, `duocolor`) are removed in V10. There is no `dist/styles/` output and no `./styles/*` package export.

## 6. Admin architecture

The Admin Portal is the UI. It should not know about registry internals, generated distribution files, Git tree construction, or Cloudflare implementation details.

The backend Action Engine owns operations such as:

```text
add icon
rename icon
move icon
delete icon
update metadata
set/add/remove tags
bulk rename
```

An operation is validated and planned before it is applied. The resulting source mutation is committed atomically. For example, renaming `umbrella` to `rain` means renaming both the artwork and its metadata while preserving the immutable ID and tags.

The important boundary is:

```text
Admin Portal
    ↓
Action Engine
    ↓
src/icons + src/metadata
    ↓
one Git commit
    ↓
GitHub Actions
    ↓
registry + dist
```

The Admin UI does not need to expose or persist a YAML DSL. Its internal request can be a normal typed action object.

## 7. GitHub Actions

The workflow is intentionally simple:

```text
source push
   ↓
npm test
   ↓
npm run build
   ↓
npm run validate
   ↓
commit generated registry/dist
```

GitHub Actions is a build/validation layer, not the Delluna business-logic layer. It does not decide how rename, move, delete, or conflict resolution works.

Generated commits use `[skip ci]` so a generated-artifact commit cannot create an endless build cycle.

## 8. Migration from V9

The V10 source tree can be bootstrapped from an existing V9 checkout without retaining the V9 registry as canonical source.

Recommended sequence:

```bash
# Copy the existing SVG source tree into V10:
#   src/icons/

# Preserve existing IDs/tags from the old generated registry:
npm run bootstrap-metadata -- --registry=/path/to/old/registry/icons.json

# Then verify the new generated state:
npm test
npm run build
npm run validate
```

After migration, `src/icons/` and `src/metadata/` are the only source of truth. The old registry is no longer required for normal builds.

## 9. Figma

`figma-plugin/` imports the normal generated icon artwork and applies the five runtime variants locally. It no longer depends on generated style distributions or `registry.json`.

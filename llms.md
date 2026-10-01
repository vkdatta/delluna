## 1. Canonical Source

Only the following locations are authoritative:

```text
src/
├── icons/
└── metadata/
runtime/
delluna-full.js
delluna.css
delluna.js
```

### Source Responsibilities

| Location | Purpose |
|---|---|
| `src/icons/**/*.svg` | Canonical SVG artwork |
| `src/metadata/<name>.json` | Human-maintained metadata |
| `runtime/` | Runtime source |
| `delluna-full.js` | Full runtime source |
| `delluna.css` | CSS source |
| `delluna.js` | JavaScript source |

> **Important:** `src/icons/` and `src/metadata/` are the source of truth. Everything under `registry/` and `dist/` is generated.

### Public Icon Names

The **public icon name is the SVG filename without `.svg`**.

Folders are strictly for internal organization and are **never part of the public icon name**.

For example:

```text
src/icons/weather/umbrella.svg
```

is publicly requested as:

```text
umbrella
```

—not:

```text
weather/umbrella
```

### Duplicate Names

Duplicate basenames are forbidden anywhere under `src/icons/`.

For example, this is invalid:

```text
src/icons/weather/umbrella.svg
src/icons/objects/umbrella.svg
```

The build **must fail** when duplicate public names are detected. It must never silently choose one.

---

## 2. Metadata

Metadata is intentionally minimal and human-maintained.

Example:

```json
{
  "id": "dl_a83f92c1...",
  "tags": ["weather", "rain", "protection"]
}
```

### Metadata Rules

Metadata must **not** duplicate values that can be derived from the source tree.

Do not store:

- `name`
- `path`
- `file`
- `extension`
- `hash`
- `folder`
- `category`

The builder derives those values automatically.

| Field | Owner | Description |
|---|---|---|
| `id` | Human-maintained | Immutable Delluna identity |
| `tags` | Human-maintained | Search terms for the icon |

The builder generates the searchable tag index from `tags`.

### Metadata Migration

The repository contains a small set of metadata examples under:

```text
src/metadata/
```

Existing libraries can bootstrap metadata for all icons from a legacy registry:

```bash
npm run bootstrap-metadata -- --registry=/path/to/old/registry/icons.json
```

The migration utility:

- preserves existing IDs when available;
- preserves existing tags when available;
- creates metadata for icons that do not have it;
- never modifies SVG artwork.

---

## 3. Generated State

The following directories are **generated** and are not canonical source:

```text
registry/
dist/
```

The builder recreates them from:

```text
src/icons/
src/metadata/
```

They may therefore be absent from a source-only checkout and are produced by the build or Action workflow.

### Generated Registry

The generated registry is intentionally **not one giant catalog**.

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

### Registry Files

| File | Purpose |
|---|---|
| `manifest.json` | Describes the generated registry |
| `index.json` | Compact searchable icon index |
| `tags.json` | Maps human-maintained tags to public icon names |
| `shards/*.json` | Metadata required to resolve individual icons without downloading the complete catalog |

---

## 4. Build

Run:

```bash
npm install
npm test
npm run build
npm run validate
```

### Build Pipeline

The build performs the following steps:

1. Scans `src/icons/**/*.svg`.
2. Validates SVG safety and canonical paths.
3. Enforces filename-only public-name uniqueness.
4. Reads the corresponding per-icon metadata.
5. Preserves metadata IDs.
6. Generates registry shards.
7. Generates the compact searchable index.
8. Generates the tag index.
9. Copies source artwork to `dist/icons/`.
10. Injects each icon's immutable ID into its distributed artwork.
11. Generates one flat ESM (`.mjs`) entry for every public icon name under `dist/esm/`.
12. Generates the full runtime bundle from the current source set.
13. Copies the runtime and CSS distribution files.

> **The build does not generate style folders.**

---

## 5. Public ESM Imports

Because public names are based solely on unique filenames, consumers do not need to know where an icon is located inside `src/icons/`.

For example:

```js
import umbrella from '@vkdatta/delluna/icons/umbrella';
import f from '@vkdatta/delluna/icons/f';
```

Even if the source files are organized into nested folders:

```text
src/icons/
├── weather/
│   └── umbrella.svg
└── misc/
    └── f.svg
```

the generated ESM modules remain flat:

```text
dist/
└── esm/
    ├── umbrella.mjs
    └── f.mjs
```

### Generated Icon Module API

Each generated module exposes:

```js
icon.name
icon.id
icon.url
await icon.svg()
```

The icon object is also the module's default export.

Example:

```js
import umbrella from '@vkdatta/delluna/icons/umbrella';

console.log(umbrella.name);
console.log(umbrella.id);
console.log(umbrella.url);

const svg = await umbrella.svg();
```

---

## 6. Source → Build → Distribution

The overall architecture is:

```text
                    CANONICAL SOURCE
                          │
             ┌────────────┴────────────┐
             │                         │
      src/icons/**/*.svg      src/metadata/*.json
             │                         │
             └────────────┬────────────┘
                          │
                          ▼
                         BUILD
                          │
             ┌────────────┼────────────┐
             │            │            │
             ▼            ▼            ▼
          registry/     dist/icons/   dist/esm/
             │            │            │
             │            │            └── Flat public imports
             │            └── Distributed SVG artwork
             └── Searchable generated registry
                          │
                          ▼
                    DELLUNA RUNTIME
```

### Core Principle

> **Source files define the truth. Generated files define the distribution.**

The builder must always be able to recreate `registry/` and `dist/` from the canonical source tree without requiring generated state as an input.

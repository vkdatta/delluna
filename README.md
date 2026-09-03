# Delluna Icons V9

Delluna V6 is a source-first SVG icon library with immutable icon IDs, a registry, a JIT browser runtime, generated distribution files, and a production-oriented administrative publishing workflow.

## Source of truth

`src/icons/` contains the SVG artwork and is authoritative. The builder never rewrites source files. `registry/manifest.json` and `registry/shards/` are the scalable registry index used by the public runtime and Admin fallback. `registry/icons.json` plus the root/dist `registry.json` files are generated compatibility copies while the legacy registry remains below the 80 MB compatibility threshold; above that threshold the shard registry is authoritative. `dist/` is the public distribution consumed by the catalog and CDN.

## Add an icon

Put an SVG anywhere under `src/icons/`. You do not need to assign an ID manually. The builder generates one for a new source file; existing embedded IDs are preserved. If two source files have the same public name, validation stops instead of silently replacing one.

## Build and validate

```bash
npm install
npm run validate
npm run build
```

`npm run test` exercises the Worker/builder hashing contract, nested-folder ESM generation, registry integrity, full-bundle coverage, and upload safety policy. `npm run validate` is read-only. `npm run build` regenerates `dist/`, the registry copies, ESM icon modules, duplicate report, and both runtime distributions. The full bundle is generated from the current `src/icons/` set rather than copied as a stale snapshot.

## Browser usage

```html
<script src="https://cdn.jsdelivr.net/gh/YOUR_GITHUB_OWNER/YOUR_GITHUB_REPO@main/dist/delluna.js"></script>
<delluna-icon name="home"></delluna-icon>
<delluna-icon name="math/plus"></delluna-icon>
```

The runtime loads only the small registry shard needed for a requested icon and fetches only the requested SVG; shard requests are cached. Variants `og`, `hud`, `orbit`, `circuit`, and `plasma` remain supported.

## Admin publishing

The Admin Portal provides persistent browser-backed upload batches, local analysis with live progress, SVG previews, conflict resolution, existing-icon rename/push, delete/push, favorites, collections, GitHub workflow status, responsive mobile navigation, folder creation/rename/delete/move/copy operations, editable upload destinations, persistent conflict review, and production-friendly error/success states.

The publishing path is:

`Admin → Cloudflare Worker → GitHub commit → GitHub Actions validation/build → dist → CDN`

The Worker creates a normal Git commit from the current branch head and updates the branch without a force push, so concurrent admin publishes cannot silently overwrite each other. Admin publishing creates the source commit with the manifest/shards as the scalable registry authority, and keeps `registry.json` / `registry/icons.json` as integrity-checked compatibility copies while they remain below the legacy size threshold. The UI tracks the source commit separately from the later Actions/CDN build state; a successful source commit is not presented as a completed public build until Actions succeeds.


## Publish/build lifecycle

Admin publishing creates a source commit containing the SVGs and the registry manifest/shards, plus legacy registry compatibility copies while they remain below the compatibility threshold. The `Delluna Build` workflow regenerates the registry and distribution with `npm run build`, then validates the generated result; the build is the only workflow that regenerates `dist/`. The Worker and builder use the same SVG normalization before hashing, including newline and inter-tag whitespace normalization. Uploads are limited to safe SVG content, valid `.svg` destinations, 512 KB per file, up to 10,000 files per batch, and 50 MB of total SVG payload per request to keep large publishes bounded and responsive. The full bundle is regenerated from source on every build. Nested ESM modules are emitted with matching directory structure and content-hash query URLs so replacements do not remain stuck behind immutable CDN caches. Auto-tagging receives the exact generated distribution commit SHA, so a tag cannot silently point at a newer unbuilt branch head. Pull requests run the same test/validate/build checks before merge.

The generated distribution commit uses `[skip ci]`, preventing the generated commit from starting a second build/tag cycle. `Universal Auto Tag` runs only after a successful build workflow and creates the next SemVer patch tag.


## V9 Icon System

The canonical source remains one SVG per icon. Delluna derives style distributions at build time rather than requiring separate source artwork for every style. The supported rendering styles are `single`, `outline`, `fill`, `solid`, `duotone`, and `duocolor`; motion is a runtime presentation layer (`none`, `pulse`, `spin`, `bounce`, `shake`, `wiggle`, `float`, `draw`).

This distinction is intentional: generated style treatments are **reference/rendering variants**, not a substitute for professionally redrawn art direction. As the library grows, an icon may override its `styles` and `motions` metadata when a treatment is not semantically appropriate.

### Figma

The `figma-plugin/` directory contains the V9 Figma plugin source. Point the plugin's CDN base at the deployed Delluna distribution and import any registry icon as a native Figma vector. Motion is a web/runtime behavior and is intentionally not embedded in the Figma vector.

export const name="mimo-fill";
export const id="dl_60e8507321abf3dd08a6";
export const url=new URL("../icons/mimo-fill.svg?v=723c9d1963b42c6b66f26682fcee27f0d2c47b3a74ce8246bcaab149c22864fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

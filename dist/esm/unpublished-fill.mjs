export const name="unpublished-fill";
export const id="dl_5cf26bdb697c4f048e28";
export const url=new URL("../icons/U/unpublished-fill.svg?v=9b251ee89b58e41e9c20fe14f8290c16e808060bfe8fdae4e2a1129f9eb3e5e9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

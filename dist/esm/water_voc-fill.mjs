export const name="water_voc-fill";
export const id="dl_0640b78e469544dba3af";
export const url=new URL("../icons/water_voc-fill.svg?v=f847a5526a42b1905c4bb1d05f5448a52cf069996402ffaa65f0f96d9ae6be92",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

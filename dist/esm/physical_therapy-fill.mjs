export const name="physical_therapy-fill";
export const id="dl_a5d5444c87dba5f6c590";
export const url=new URL("../icons/physical_therapy-fill.svg?v=bea1ef41c0dcf976b7fee8a2d94c0fd341e3addf9f0fe32fc2d2a1349759be55",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

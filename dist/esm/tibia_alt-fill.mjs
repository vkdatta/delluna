export const name="tibia_alt-fill";
export const id="dl_b23d0bc572824be18e65";
export const url=new URL("../icons/tibia_alt-fill.svg?v=5344e2f91ba0b9907a44264999e532b13a3b6e06e88b96badab9a16a3036bc82",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

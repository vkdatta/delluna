export const name="fragrance-fill";
export const id="dl_c9a3aa351e63464aaec3";
export const url=new URL("../icons/fragrance-fill.svg?v=6b19748ce76ec64c91b1e9b1e2f27a787063ef01e9367ee9b42469be980b2dee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

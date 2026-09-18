export const name="width_full";
export const id="dl_44e00cc142b54db695fc";
export const url=new URL("../icons/width_full.svg?v=9cdc6365879a9a954de1d02dcdb171627b6a18dfd01ccd2d739416299fa141c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

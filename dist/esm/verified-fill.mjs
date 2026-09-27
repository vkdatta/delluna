export const name="verified-fill";
export const id="dl_6e0c2ca8cc05f764f64f";
export const url=new URL("../icons/verified-fill.svg?v=0a82be2f1f9b3d110174afccc7db84203beeca8cd2ae61da9998e14aec195727",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

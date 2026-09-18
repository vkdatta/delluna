export const name="elevation";
export const id="dl_397b8a80d46141b0be93";
export const url=new URL("../icons/elevation.svg?v=230da87c6d9d60678a5f4f200f3cac06d7c90d778bf95162e931e1e469eeaf7d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

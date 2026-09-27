export const name="hive-fill";
export const id="dl_4bffc8e2a8790ea3d5d6";
export const url=new URL("../icons/hive-fill.svg?v=d3fe2071e4d1d2cca4595d3284f73cdb63df2941f1608ab94d34cf3adbd07c30",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

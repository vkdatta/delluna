export const name="cell-signal-high-duotone";
export const id="dl_354f573778784cad96f8";
export const url=new URL("../icons/cell-signal-high-duotone.svg?v=0ee51fbf1324ad6f79e59fc47b8f7c73a4aba747a10fe2d0dba8c0dfc7d7a32f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

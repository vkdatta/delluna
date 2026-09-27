export const name="sneaker-move-bold";
export const id="dl_d6f42239efc6965fa42b";
export const url=new URL("../icons/sneaker-move-bold.svg?v=fc75376f1f41a1ff4b3bdebb1e56cedd7126efe589b0d00e70816aabac264a3d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

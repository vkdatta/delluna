export const name="expand";
export const id="dl_a31693b216bd135d3093";
export const url=new URL("../icons/expand.svg?v=a704b8f855b391fa605ea32a8047ee83fe3669c7fa231614844d2d8a55cc5e7d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="share-network-duotone";
export const id="dl_e1c1398783524f1999f5";
export const url=new URL("../icons/S/share-network-duotone.svg?v=0bf3d364f143754ea8b654ecef67d26c84750e6487ccb0ce86aa59ad662c4f89",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

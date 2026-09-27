export const name="tabs-duotone";
export const id="dl_b67c04b685f5680a0278";
export const url=new URL("../icons/tabs-duotone.svg?v=5d2fc72884a141a6b1acd541c0a1dc7888e09c228cd14d041a8438f807b7520b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

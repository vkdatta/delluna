export const name="drop";
export const id="dl_62fb8c23847f42c4995f";
export const url=new URL("../icons/drop.svg?v=2ba97df81d27bb63bdadaabc44cafe7989f4405e0a9f531e909746c9817365ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

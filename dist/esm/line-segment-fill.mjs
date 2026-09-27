export const name="line-segment-fill";
export const id="dl_023bfc2c4c2f41e0b7a1";
export const url=new URL("../icons/line-segment-fill.svg?v=516a9b2a726bdb896aa755c4654a0de5b3eac19839203e6e2023dfb119bf92bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

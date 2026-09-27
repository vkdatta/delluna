export const name="hard_disk-fill";
export const id="dl_d154d5d96ef6553b8e12";
export const url=new URL("../icons/hard_disk-fill.svg?v=aa282ed92c552189c55dc2dfde9f5af7cdb3759d0d8742c33fd7e03fe4a291eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

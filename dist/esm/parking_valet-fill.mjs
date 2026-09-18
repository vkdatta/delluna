export const name="parking_valet-fill";
export const id="dl_a87345ff565a4f88ace8";
export const url=new URL("../icons/parking_valet-fill.svg?v=51661b635ba6b79cbdaed90cbd96e7e89a8d5cc4a5adec791ff3f91f4413a017",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

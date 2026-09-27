export const name="parking_valet-fill";
export const id="dl_0699b10d9abe8929a280";
export const url=new URL("../icons/parking_valet-fill.svg?v=359329f914e845b92b6095556d08484cc90938e82f8dae976ecf2bb03d4d54a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

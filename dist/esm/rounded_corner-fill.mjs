export const name="rounded_corner-fill";
export const id="dl_1d3ee4195f3d4652b5e2";
export const url=new URL("../icons/R/rounded_corner-fill.svg?v=3b1c3e5d8f796950875b636a31672e8a3cae57edf5dc0b30a3717f2f75cef950",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

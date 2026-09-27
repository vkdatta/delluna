export const name="hdr_plus_off-fill";
export const id="dl_3a952db9d3b3b1b3718f";
export const url=new URL("../icons/hdr_plus_off-fill.svg?v=e434713071629e81a849a50f30dacb8b2f62cf353515c1dfeacc5df292bdcee4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

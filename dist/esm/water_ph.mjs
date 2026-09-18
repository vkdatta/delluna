export const name="water_ph";
export const id="dl_b8cd9112ee0e4351baf3";
export const url=new URL("../icons/W/water_ph.svg?v=a7e1e4f2b63f54ee65c748079991e722324127dc1871b2786c08993972c94ba8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

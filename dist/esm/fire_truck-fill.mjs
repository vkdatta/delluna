export const name="fire_truck-fill";
export const id="dl_33a65f69a31d44828794";
export const url=new URL("../icons/F/fire_truck-fill.svg?v=07d62d72c3c1b96cbca45e554e972fd6d4c8edebe6e6fadd2e38ad73747bb094",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

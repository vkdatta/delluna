export const name="water_bottle_large";
export const id="dl_a3eb452efef94c38a4ee";
export const url=new URL("../icons/water_bottle_large.svg?v=e897c9d30eb27464bf730a6049cb03a99d6b3eaa9635f33f2d4d846d2d5793b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

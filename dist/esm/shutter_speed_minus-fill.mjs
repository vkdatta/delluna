export const name="shutter_speed_minus-fill";
export const id="dl_cb2867129ca1f9e7e81b";
export const url=new URL("../icons/shutter_speed_minus-fill.svg?v=cc7a1c8d1946f311961241325c1d3a7540470ec8463008d3261d712dd79b8fe9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

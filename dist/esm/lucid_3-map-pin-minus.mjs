export const name="lucid_3-map-pin-minus";
export const id="dl_1ba2a560f47e448f8bea";
export const url=new URL("../icons/lucid_3-map-pin-minus.svg?v=d6b9060e2e96f31bb82984072b2d0b92cacd75a60ee107d3e2ed39a06a032453",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

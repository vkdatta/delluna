export const name="trip";
export const id="dl_afec22f063707482d305";
export const url=new URL("../icons/trip.svg?v=151ff8a8f3d7e116ee9dfd7f0b3e8476116f5d21cdfc788d1ff1798d4ef6b56d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

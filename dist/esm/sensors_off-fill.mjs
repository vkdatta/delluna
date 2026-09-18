export const name="sensors_off-fill";
export const id="dl_1ac4ad0213e24d62a77d";
export const url=new URL("../icons/sensors_off-fill.svg?v=5436403af94fd9c126112ddde276447b77bd72953e2a2b2d67379601fbc9c9b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

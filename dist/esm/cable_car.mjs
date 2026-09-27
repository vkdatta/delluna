export const name="cable_car";
export const id="dl_8d7ccb7d632935f006ba";
export const url=new URL("../icons/cable_car.svg?v=9b3811a32d36efc3c9651d5dfee2baf5bbfe837b027274957b12a240b81b660d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

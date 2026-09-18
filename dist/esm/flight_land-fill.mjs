export const name="flight_land-fill";
export const id="dl_4beb1f663ff64920b3c4";
export const url=new URL("../icons/flight_land-fill.svg?v=030fb0c09d20ef86a23ff14ed7cbf8c233210e29acdea13ff4527ea57fada3e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

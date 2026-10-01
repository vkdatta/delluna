export const name="flight_class-fill";
export const id="dl_bdec28a846acb916b24d";
export const url=new URL("../icons/flight_class-fill.svg?v=48f8c3724831b46198718ef930c88e83790bb67aae2bfd91bbcde57013a2163a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="flight_land-fill";
export const id="dl_859df075eb2c60680e7d";
export const url=new URL("../icons/flight_land-fill.svg?v=89c43e1dfa15b49b536c8e609a08e4d51e2445fc06065bdf4b14b263f7570566",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

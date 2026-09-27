export const name="flights_and_hotels";
export const id="dl_45b1b07b578f3868050d";
export const url=new URL("../icons/flights_and_hotels.svg?v=ae29a662acc02d2ebfae43b2f9149f456b12b3ffd1008a0a97da269648afe4aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

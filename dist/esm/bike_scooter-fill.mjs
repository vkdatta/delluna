export const name="bike_scooter-fill";
export const id="dl_276440db2d4bbd9122b3";
export const url=new URL("../icons/bike_scooter-fill.svg?v=f714e2527230a29324e60c781f211c270a251370377a491d3b968ddd57565677",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

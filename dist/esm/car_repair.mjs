export const name="car_repair";
export const id="dl_6818902e10864517bf15";
export const url=new URL("../icons/C/car_repair.svg?v=4c581a5401800739a699ce6ee525dc1d9f9ac96700687fd194943127e9854ac1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

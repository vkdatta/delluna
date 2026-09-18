export const name="car_repair-fill";
export const id="dl_54e3a5d9ff8b49ee8bed";
export const url=new URL("../icons/car_repair-fill.svg?v=ff67b7b53f96acd78f943fdeb75b0c940626eedc9ac46b7e3518c46454d043f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

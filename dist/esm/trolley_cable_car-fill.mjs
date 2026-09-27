export const name="trolley_cable_car-fill";
export const id="dl_0b7b78a66a5c881811e9";
export const url=new URL("../icons/trolley_cable_car-fill.svg?v=2cf98a11c60693b634c7c3ae9fa9bd8bf75547ee72da7a6b01a0dc35fdb97548",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

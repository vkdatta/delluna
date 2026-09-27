export const name="battery_charging_30-fill";
export const id="dl_e0678e80b3edb0b442c3";
export const url=new URL("../icons/battery_charging_30-fill.svg?v=ec7c8de669f7690ec71e52493b3398f803d49787a359c19532c4a4e9afdc934a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

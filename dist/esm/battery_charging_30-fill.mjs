export const name="battery_charging_30-fill";
export const id="dl_34d5db59fe1da2779a3f";
export const url=new URL("../icons/battery_charging_30-fill.svg?v=7dbf3945ad49f96f52e24c47af9f949b84d057ca983eed36d15115b545093e27",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

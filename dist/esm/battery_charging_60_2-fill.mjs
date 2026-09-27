export const name="battery_charging_60_2-fill";
export const id="dl_9c6c4c5c687250bbbefc";
export const url=new URL("../icons/battery_charging_60_2-fill.svg?v=05b2972d141eb4b6e2e209c244f881cb02837d70fde8f2860b7fb32f15d3f537",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

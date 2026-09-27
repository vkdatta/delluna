export const name="battery_charging_60-fill";
export const id="dl_7c49d142ffd5961842ee";
export const url=new URL("../icons/battery_charging_60-fill.svg?v=89758f12097c8277b1b25a89aa757a80f66a99b16a8fa6e2fe1b08f600545964",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

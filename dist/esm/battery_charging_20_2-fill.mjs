export const name="battery_charging_20_2-fill";
export const id="dl_f57645dbc5894e8a8402";
export const url=new URL("../icons/battery_charging_20_2-fill.svg?v=ce08d53d04cb707e93fb6df207a46b0a74e64ba30bc6e13ee7ffa0482f883fba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

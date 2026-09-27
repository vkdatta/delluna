export const name="car_fan_mid_low_right-fill";
export const id="dl_c5a66f19fe5784d9cf61";
export const url=new URL("../icons/car_fan_mid_low_right-fill.svg?v=a8d4b3a0d7b52476b07332ca40cfc4a97874d7eefc60d288d6441e6ae491f298",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

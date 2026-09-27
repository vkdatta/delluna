export const name="car_fan_low_mid_left-fill";
export const id="dl_8db3161043e9ea229e3f";
export const url=new URL("../icons/car_fan_low_mid_left-fill.svg?v=34915f8be2141da557111b3bbf376e1f422122c8ef7656c4d3bd90e0f9e3197f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

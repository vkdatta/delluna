export const name="car_fan_mid_left-fill";
export const id="dl_3fc7123790ca4ae385d0";
export const url=new URL("../icons/car_fan_mid_left-fill.svg?v=0feb92de9f17fc2ea1658104e26b8a7f26e5da207f5f6835664bda7acadd44cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

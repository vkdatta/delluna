export const name="car_fan_recirculate-fill";
export const id="dl_b32d2238e075e6d28763";
export const url=new URL("../icons/car_fan_recirculate-fill.svg?v=40c58ab156b12a6d4df1125ccfb25f148e8f9bbfa3e69e74fe67c62af4d7c6ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

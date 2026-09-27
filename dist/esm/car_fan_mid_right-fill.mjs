export const name="car_fan_mid_right-fill";
export const id="dl_1e79f5d3e52fb2a80859";
export const url=new URL("../icons/car_fan_mid_right-fill.svg?v=a1278900835b5ab22557486bca19564d1d9be449fb34bdfd5992138757686d31",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

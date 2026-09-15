export const name="car_fan_mid_low_right-fill";
export const id="dl_7db76620585e49e89ef0";
export const url=new URL("../icons/C/car_fan_mid_low_right-fill.svg?v=27d780b23b88fe688ed0c377e60ee1a5b8851c0826ca604c1cbee0cc999975fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

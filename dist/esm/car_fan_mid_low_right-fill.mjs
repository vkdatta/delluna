export const name="car_fan_mid_low_right-fill";
export const id="dl_1a79ce91ba5b6aa05de7";
export const url=new URL("../icons/car_fan_mid_low_right-fill.svg?v=6cf91e9b269a72f4ba503c851df098ae204f808d649cb23bb32ad39e9910b9b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

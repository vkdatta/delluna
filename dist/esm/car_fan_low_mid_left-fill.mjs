export const name="car_fan_low_mid_left-fill";
export const id="dl_ad7860669a08ba20dceb";
export const url=new URL("../icons/car_fan_low_mid_left-fill.svg?v=9bd24c776d903c49a956496f39d745aba013788fe29bb1d9bec23f77b368ff2d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

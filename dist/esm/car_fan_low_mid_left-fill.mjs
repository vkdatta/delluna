export const name="car_fan_low_mid_left-fill";
export const id="dl_3a606d60839a49aa9c70";
export const url=new URL("../icons/C/car_fan_low_mid_left-fill.svg?v=812faa0aa81eb81248a296bd567563d224ab92da96eac199b375ac331bc60fac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

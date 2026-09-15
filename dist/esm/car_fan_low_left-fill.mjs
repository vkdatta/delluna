export const name="car_fan_low_left-fill";
export const id="dl_5dd67768299a49c8b85e";
export const url=new URL("../icons/C/car_fan_low_left-fill.svg?v=ba61803eddcdfa8e912aac772baf624d8b0e631a4e3ba36264b4147a59ae142e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

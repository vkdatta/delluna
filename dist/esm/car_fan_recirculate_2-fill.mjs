export const name="car_fan_recirculate_2-fill";
export const id="dl_b3b2771bbe03805c0f04";
export const url=new URL("../icons/car_fan_recirculate_2-fill.svg?v=0f7c02ff6a7701e902c3240ae33a5b9fd54a42734e8918dd135c1cb0550e185a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

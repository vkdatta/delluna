export const name="car_fan_recirculate_2";
export const id="dl_9aa6a0101c55762bb9ca";
export const url=new URL("../icons/car_fan_recirculate_2.svg?v=4ac71c1253598d9c963aa861106582ee58a04999b2a15bb618ded684221b7709",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

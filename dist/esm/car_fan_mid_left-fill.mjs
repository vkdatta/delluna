export const name="car_fan_mid_left-fill";
export const id="dl_76dc3b6a22922d0ee2f0";
export const url=new URL("../icons/car_fan_mid_left-fill.svg?v=4b479b3657c4ab0518ed65119156fd5f48f4f84ff8c9c0506dc9b845bf9c61e3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

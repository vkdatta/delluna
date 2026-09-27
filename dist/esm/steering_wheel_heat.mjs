export const name="steering_wheel_heat";
export const id="dl_e3345dc96edf5258d58f";
export const url=new URL("../icons/steering_wheel_heat.svg?v=28930f07505747bf1e1c22733efd6676a4f0b878d548200722bb7f453119dccc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

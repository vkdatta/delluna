export const name="car_defrost_mid_left-fill";
export const id="dl_b84bdb2b1c6ed3b1b97f";
export const url=new URL("../icons/car_defrost_mid_left-fill.svg?v=3c4f7d66e26dd072e9061f28094581dd37ace34dc1a6b2ecc845356d89e158a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

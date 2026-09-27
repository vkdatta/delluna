export const name="car_defrost_low_right-fill";
export const id="dl_c385d7c03caf7fb3bc03";
export const url=new URL("../icons/car_defrost_low_right-fill.svg?v=16ba3d63016b8d44995f2a6771e3799555f129cf4a62d826caf28fd991491fcc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

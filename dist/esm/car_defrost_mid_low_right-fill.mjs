export const name="car_defrost_mid_low_right-fill";
export const id="dl_24e2a33f703cd52676ab";
export const url=new URL("../icons/car_defrost_mid_low_right-fill.svg?v=49b4a257bb2ac0c2d26c7400548336421e3126bf4060fa700225369411e45727",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

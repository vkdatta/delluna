export const name="car_defrost_mid_right-fill";
export const id="dl_a85497d4053f4e849e97";
export const url=new URL("../icons/car_defrost_mid_right-fill.svg?v=69538b0ca7e29b1d8abbaa11f90184b4d104928bc619ebaa6c3b7726dc08c4c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

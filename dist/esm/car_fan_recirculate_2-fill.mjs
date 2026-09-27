export const name="car_fan_recirculate_2-fill";
export const id="dl_d77922bb8f66f627d836";
export const url=new URL("../icons/car_fan_recirculate_2-fill.svg?v=0fe8ae475b69175ae50384e3201f009dd9a083c41f33ad438e8f85744d432895",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="car_fan_mid_left-fill";
export const id="dl_f69af0689ba96ad1bb0e";
export const url=new URL("../icons/car_fan_mid_left-fill.svg?v=3f6048049ec4236d50d95cc8eb35f9e172623c99518efb05a2f94fb448e75fc4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

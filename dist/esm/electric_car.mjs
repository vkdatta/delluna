export const name="electric_car";
export const id="dl_0828fe6683337730f97f";
export const url=new URL("../icons/electric_car.svg?v=4039d2d0fbbb1b9500a700adc5d3e878c43ec9b082e7315907cfe04ccd58ee26",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

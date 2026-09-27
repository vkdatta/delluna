export const name="car_fan_recirculate";
export const id="dl_98dc025fbcfa6207486e";
export const url=new URL("../icons/car_fan_recirculate.svg?v=c13d36de6542c90ec9fa9f978a3d0642f482ccdea6a338213a90fb9e0653f322",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

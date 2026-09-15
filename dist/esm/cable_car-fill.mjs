export const name="cable_car-fill";
export const id="dl_2d1772a7f77e459f91e1";
export const url=new URL("../icons/C/cable_car-fill.svg?v=6ca6db35bb478f585670b50425ae5f44790222637abf6ad80b7696b084e3352d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

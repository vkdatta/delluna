export const name="water_heater";
export const id="dl_509476f1ffa5e866574c";
export const url=new URL("../icons/water_heater.svg?v=757447f7268b013617fb14b4a2d72b91504f6feb3eb21990c682edefb05b3954",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

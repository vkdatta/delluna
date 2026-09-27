export const name="battery_charging_80-fill";
export const id="dl_d8fcbd62ae5e76f028d7";
export const url=new URL("../icons/battery_charging_80-fill.svg?v=c4dc3b774c11fb2c12ea35db9e75d5890b2e8d10e32423fa3b714dafc9d38a34",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

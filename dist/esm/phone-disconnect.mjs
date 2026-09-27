export const name="phone-disconnect";
export const id="dl_52cafbcac812463182f8";
export const url=new URL("../icons/phone-disconnect.svg?v=79b2004791e0eaf57b32620a4a06490487bc2ecdd8352ef23bb6030492b016b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

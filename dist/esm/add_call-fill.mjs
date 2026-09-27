export const name="add_call-fill";
export const id="dl_0098843dd421ee51962b";
export const url=new URL("../icons/add_call-fill.svg?v=98cf752af63481e2c455d2a0c2cce8d95108d8a5802945b3cdb1ef1d8d6b7a2d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

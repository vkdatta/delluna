export const name="device-tablet-thin";
export const id="dl_a6ddcd08b5e74773a561";
export const url=new URL("../icons/device-tablet-thin.svg?v=64dc3da54dc926bbd142960b04307ec30b959a4e2c09ebb03054fed40047d317",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="car_gear";
export const id="dl_92f85a512c43021ae27e";
export const url=new URL("../icons/car_gear.svg?v=3dbb4f8b72bd41f8ef717fd449313ae469cecec79e07225be8adf30076bff43b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

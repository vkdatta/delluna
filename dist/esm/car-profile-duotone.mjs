export const name="car-profile-duotone";
export const id="dl_0ec642fa2256464e8e89";
export const url=new URL("../icons/car-profile-duotone.svg?v=5bf2437bb3e8957232d1d9edac9c35d6eb3ad336ebc6a225558496ec334ce9d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

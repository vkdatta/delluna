export const name="car-profile-duotone";
export const id="dl_0ec642fa2256464e8e89";
export const url=new URL("../icons/car-profile-duotone.svg?v=f0f95a020faf7026e1bbcff653ae4831679f825f3799287063930b974975586d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

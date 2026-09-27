export const name="cloud_off";
export const id="dl_4222b0d4d936d5e6483e";
export const url=new URL("../icons/cloud_off.svg?v=7cd98f81231f5b93b3054b4a55ba14279abbc9277da4024fcd1c2d5d9d34318b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

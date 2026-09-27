export const name="campfire-duotone";
export const id="dl_fdba204c8db741c1aa6d";
export const url=new URL("../icons/campfire-duotone.svg?v=9b550eae5e4ca21f9b86dfd4d139b76edbfe34a369997c5e0bcd9eaf22fb7c2d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

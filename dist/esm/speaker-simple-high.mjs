export const name="speaker-simple-high";
export const id="dl_8f75fd7978ace86d6e5b";
export const url=new URL("../icons/speaker-simple-high.svg?v=bffa23e9140efe90d0a917934581ee806a79ea2a74ba6afb2d00447ee5e74dda",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

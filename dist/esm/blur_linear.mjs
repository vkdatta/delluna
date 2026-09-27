export const name="blur_linear";
export const id="dl_42c67beeaae608d5ff62";
export const url=new URL("../icons/blur_linear.svg?v=621455437fcdf9d35fb82252368367aec3f452aa4d1c6eb9fb3ea65c733ca324",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

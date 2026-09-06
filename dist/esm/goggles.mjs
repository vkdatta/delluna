export const name="goggles";
export const id="dl_565f4a2fc35948ceb918";
export const url=new URL("../icons/goggles.svg?v=fca6261b2254eed4e8601332456d1b8a8fb59d180dc553e18d6d6c04de9a5244",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

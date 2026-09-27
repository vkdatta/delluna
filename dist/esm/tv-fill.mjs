export const name="tv-fill";
export const id="dl_94414c7ded8c2cd19268";
export const url=new URL("../icons/tv-fill.svg?v=2dc1a99074fd097bee33e3245cd14b04264bd4ff7b223f83534bf2d5a690eb38",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

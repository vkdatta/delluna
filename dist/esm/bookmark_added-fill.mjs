export const name="bookmark_added-fill";
export const id="dl_668ba666fcaff8265c4b";
export const url=new URL("../icons/bookmark_added-fill.svg?v=11933016f370399b0e2060acffbbb9b4db0a6132b6537e2cf316bc7aacdda709",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

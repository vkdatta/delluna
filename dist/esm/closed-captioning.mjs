export const name="closed-captioning";
export const id="dl_e85fc53270d34a94a0be";
export const url=new URL("../icons/closed-captioning.svg?v=5862153529a9fbc07ff3d63e59a7fd2b11566e10a15265331272fa840598422e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

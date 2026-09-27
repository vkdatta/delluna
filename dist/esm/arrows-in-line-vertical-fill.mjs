export const name="arrows-in-line-vertical-fill";
export const id="dl_c9824a15cbf34b66a91b";
export const url=new URL("../icons/arrows-in-line-vertical-fill.svg?v=9d7492cca6e315737a314414e56e756cd37ee7b75d3e2675e6bd001ed1556648",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

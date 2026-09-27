export const name="grains-duotone";
export const id="dl_8549b741c5d9415db211";
export const url=new URL("../icons/grains-duotone.svg?v=4f188c1d9afdacd46c7f1f6b29030ed9b274950392beecb395b283f146f7255a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

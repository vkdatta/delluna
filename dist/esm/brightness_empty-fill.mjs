export const name="brightness_empty-fill";
export const id="dl_87556e8373e8cf9891e4";
export const url=new URL("../icons/brightness_empty-fill.svg?v=a91d216c0574f0671e0dbcf380db0fc97db95af62b05588d1e8c0b3ef41c865c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

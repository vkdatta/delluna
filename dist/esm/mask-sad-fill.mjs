export const name="mask-sad-fill";
export const id="dl_9687797b8a1346efa1a8";
export const url=new URL("../icons/mask-sad-fill.svg?v=e8693b5465544d93afe9e758d5a61b2f3185043abe2aba32edb58bfbec64a078",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

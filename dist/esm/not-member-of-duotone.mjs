export const name="not-member-of-duotone";
export const id="dl_1943dc2e8ac54fbbbb3f";
export const url=new URL("../icons/not-member-of-duotone.svg?v=3e0b283482f99a6f928c53cbc8fac0bba50a69338c346c40072094835181bfe0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

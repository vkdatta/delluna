export const name="user-plus-duotone";
export const id="dl_fa996a8a5ef2f2717d7a";
export const url=new URL("../icons/user-plus-duotone.svg?v=76e095f0de29638d56ac29a5c31c9759500f8c27412ea119111d162484b00cc7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

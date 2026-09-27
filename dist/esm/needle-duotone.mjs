export const name="needle-duotone";
export const id="dl_6989e9fac302410ba2a6";
export const url=new URL("../icons/needle-duotone.svg?v=a2be34865bdccd1cf6462d5035407f653244cdc51a7bc9d62f25c290303f470e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

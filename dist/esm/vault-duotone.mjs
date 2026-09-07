export const name="vault-duotone";
export const id="dl_d4f7e5e6ff084e0a86f5";
export const url=new URL("../icons/V/vault-duotone.svg?v=3e77a2ca28fbd9e852fddaca40e9dcb09b1db396ffb0189807a13450a0667575",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

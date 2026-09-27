export const name="domain_verification_off-fill";
export const id="dl_a669cd23539b26fc5339";
export const url=new URL("../icons/domain_verification_off-fill.svg?v=044ebfdd915d3f73115097d4caf511d84cd7186bbe5eb5d58d35b718a2c9d7d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

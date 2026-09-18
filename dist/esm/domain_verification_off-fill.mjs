export const name="domain_verification_off-fill";
export const id="dl_7320aad5b8764e01b995";
export const url=new URL("../icons/domain_verification_off-fill.svg?v=4c6c02e14a75b33631384194775c22cb242f3aa9bb1e0bffad08a138e93c9444",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

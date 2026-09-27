export const name="local_shipping";
export const id="dl_a6789d2525f33915cde5";
export const url=new URL("../icons/local_shipping.svg?v=ecf63ab5a7c5379bd081415cc3b4a901ccb5cbfa24adb4f14599bd1a09530c74",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

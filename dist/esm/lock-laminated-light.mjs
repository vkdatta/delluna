export const name="lock-laminated-light";
export const id="dl_abeaea034daa42c6921b";
export const url=new URL("../icons/lock-laminated-light.svg?v=cf47db66b2f3e584408b3eba398670c8ba762bac10c13ccca18b2a3fcedccd4e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

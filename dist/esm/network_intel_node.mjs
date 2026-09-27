export const name="network_intel_node";
export const id="dl_2c4dbcce04d0cf1817e5";
export const url=new URL("../icons/network_intel_node.svg?v=db856458ec65ade18f1460bfd905cff8586bbd5698f11a450f83807d0218a0fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

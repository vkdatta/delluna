export const name="currency_exchange";
export const id="dl_7a055562b0b40445642b";
export const url=new URL("../icons/currency_exchange.svg?v=a050dc5ec351614a731c41d168de86b23a179bd821e922d09764ea343edbcd94",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

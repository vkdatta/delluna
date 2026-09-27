export const name="receipt-duotone";
export const id="dl_7cd77b195e5e4a0baaf5";
export const url=new URL("../icons/receipt-duotone.svg?v=0d1a3b2e63c0c6d9dd51ea7d1ba48d7085c7fb5938c602c5ce1840a6ac2deaeb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

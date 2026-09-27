export const name="receipt-x-duotone";
export const id="dl_1a1c7ec6fb274a4e92a8";
export const url=new URL("../icons/receipt-x-duotone.svg?v=79f715733d9f04a8c7773077bdec390dc8727068d0d03b7d4e6012745d3874fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

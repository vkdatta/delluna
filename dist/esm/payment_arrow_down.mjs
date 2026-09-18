export const name="payment_arrow_down";
export const id="dl_3b0849f02fe04a2bb6b7";
export const url=new URL("../icons/P/payment_arrow_down.svg?v=8c5f0d2e01e98db279fc78ad4a9779410eec3a27e58b75968b177d01f27a38ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

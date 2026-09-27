export const name="wallet";
export const id="dl_bff3956cda1a70bfb35f";
export const url=new URL("../icons/wallet.svg?v=1c5c12797d50cd26e4006539943738fc5b64eafc5e84d8137533f61a7f06be85",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

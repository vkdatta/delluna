export const name="payment_arrow_down";
export const id="dl_e3a0197715930b90fa09";
export const url=new URL("../icons/payment_arrow_down.svg?v=64edf43ae4879da9fae065c5d2e4d62038c79a19e834e06a3f3ec9d5c0aa631d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

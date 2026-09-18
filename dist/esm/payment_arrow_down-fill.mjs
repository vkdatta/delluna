export const name="payment_arrow_down-fill";
export const id="dl_41b348b74d8a4de6a512";
export const url=new URL("../icons/P/payment_arrow_down-fill.svg?v=84c51e609d6130056fae1d1288b7cc6efce93d1b244736d8c9f96f04a05e8e14",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

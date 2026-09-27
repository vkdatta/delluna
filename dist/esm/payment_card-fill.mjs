export const name="payment_card-fill";
export const id="dl_08c3ba24c363662f83ad";
export const url=new URL("../icons/payment_card-fill.svg?v=6f644ebc1292e72438a464e7424cfbff5c6f3388255f33d25b03ec3fdf9be8f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

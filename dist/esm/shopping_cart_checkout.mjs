export const name="shopping_cart_checkout";
export const id="dl_a8f8103df0ff4aa29152";
export const url=new URL("../icons/S/shopping_cart_checkout.svg?v=2837d3c01461ed9fdd53953fd441364638568668c5197ce33646fe13ddfd43c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="shopping_cart_checkout";
export const id="dl_b82bde36e6a2536f61fb";
export const url=new URL("../icons/shopping_cart_checkout.svg?v=0652866b0475543b154aed41eed1cd8ac33e9fa4d5f920e46208fec1dbe1d163",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

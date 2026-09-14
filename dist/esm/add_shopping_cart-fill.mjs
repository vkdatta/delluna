export const name="add_shopping_cart-fill";
export const id="dl_2a5eab687d3f454ab866";
export const url=new URL("../icons/A/add_shopping_cart-fill.svg?v=5ccca401882f01d8b2a46918f8003899bcc0a811540d07da6edc7efa198a5222",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

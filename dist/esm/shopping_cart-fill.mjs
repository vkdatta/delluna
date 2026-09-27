export const name="shopping_cart-fill";
export const id="dl_80e3170096d89a310767";
export const url=new URL("../icons/shopping_cart-fill.svg?v=630d66ccaee167c829a9a1b8f8d9ce00215964d219cc589ccf59935aa9d83e40",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="lucid_3-shopping-cart-plus";
export const id="dl_ff52fa506115421a91d7";
export const url=new URL("../icons/lucid_3-shopping-cart-plus.svg?v=5c71f15255ded2a7d122e96cbe48ea6f1803ff9cad08d8a0a36cb70e3bd6d561",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

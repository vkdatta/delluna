export const name="lucid_3-shopping-cart-plus";
export const id="dl_ff52fa506115421a91d7";
export const url=new URL("../icons/lucid_3-shopping-cart-plus.svg?v=f49166eed1dbe718b5e5002e825ef1fea2e02f9955f663b5395111cd4feef0ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

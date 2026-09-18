export const name="shopping_cart-fill";
export const id="dl_01d55abb19734b1bb119";
export const url=new URL("../icons/shopping_cart-fill.svg?v=938744f84a7ef7342ffe44084f87686b6021d33a7f1a0310a973a51e4e7fcce7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="shopping-cart-simple-fill";
export const id="dl_08a3c3d04979417a8fb1";
export const url=new URL("../icons/shopping-cart-simple-fill.svg?v=f8594151e46d595304ed5e5bf7647eea58fb8eeeeae33bc6ab85d48cb41ebac5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

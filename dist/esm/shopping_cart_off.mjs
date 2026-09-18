export const name="shopping_cart_off";
export const id="dl_688d053e2ac74bccaaea";
export const url=new URL("../icons/shopping_cart_off.svg?v=1856d675197bcd7b1a663cba63a52293f5056fa027d8218f8b517ff28ecfba01",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

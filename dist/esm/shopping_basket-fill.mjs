export const name="shopping_basket-fill";
export const id="dl_acf9104a7c334e7cfb95";
export const url=new URL("../icons/shopping_basket-fill.svg?v=d611ffb078d907331663cf809e55ec921e6cd1be76d36270a0899dda2137d29a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

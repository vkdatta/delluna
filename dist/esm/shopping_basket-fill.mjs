export const name="shopping_basket-fill";
export const id="dl_56f2a9f0983cc1d68e20";
export const url=new URL("../icons/shopping_basket-fill.svg?v=4c0b1072c8670e1942aad22c030afc3d574cb90de2f99a717720a3ff7ae96ee4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

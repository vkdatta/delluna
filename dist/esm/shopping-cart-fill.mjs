export const name="shopping-cart-fill";
export const id="dl_4accd602de8840cdbda8";
export const url=new URL("../icons/S/shopping-cart-fill.svg?v=32193c360cbdce38028355bb0b20143e19c351c2ca5c8d7256e42cbe2643c59b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

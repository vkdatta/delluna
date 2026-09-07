export const name="shopping-cart-bold";
export const id="dl_6604ab0fb3654f139da0";
export const url=new URL("../icons/S/shopping-cart-bold.svg?v=d64d6605c5c0fab616c1fbb9c0b45b2f4b1995ed8a4446c58978bcac850dfc6c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

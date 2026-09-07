export const name="shopping-cart";
export const id="dl_e913c2c96b1a48bc8cbb";
export const url=new URL("../icons/S/shopping-cart.svg?v=c972c761af11dcf0308abedac84543d235062d073d11b2119d0da870465ad474",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

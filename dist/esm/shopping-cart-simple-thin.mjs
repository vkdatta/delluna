export const name="shopping-cart-simple-thin";
export const id="dl_2137926c33653f91f744";
export const url=new URL("../icons/shopping-cart-simple-thin.svg?v=2395b0f9c5ba906b533bbac176fdbb5259df04779bda971df809450da8969864",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

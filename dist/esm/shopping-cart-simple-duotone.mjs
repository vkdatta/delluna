export const name="shopping-cart-simple-duotone";
export const id="dl_28559c9e463046f4bf0a";
export const url=new URL("../icons/S/shopping-cart-simple-duotone.svg?v=7bed5a756c83acd58d8b9deafa1295b87fd5087f8377fb5c9735cd5becacb000",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

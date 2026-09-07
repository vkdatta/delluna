export const name="shopping-cart-simple-light";
export const id="dl_3c5c8b0605d04bcea304";
export const url=new URL("../icons/S/shopping-cart-simple-light.svg?v=21bf34ce89c36882fc1f1d07ae4874412c6252e02a1d752021e5c0ed6169e4f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

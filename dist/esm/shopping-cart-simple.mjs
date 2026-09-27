export const name="shopping-cart-simple";
export const id="dl_a258469f813b3d613cc4";
export const url=new URL("../icons/shopping-cart-simple.svg?v=019b8f99dbcf3fe1946aa5c6e7b989028673d83f935ad9be24bb1e8a430fbd4c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="shopping-cart-duotone";
export const id="dl_bca1ef869d377c6523ef";
export const url=new URL("../icons/shopping-cart-duotone.svg?v=a1ae79912388aae1e42ed91c957e654a6c6636580d473d494f5e604593a4c1ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

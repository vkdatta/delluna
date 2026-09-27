export const name="shopping_cart";
export const id="dl_744210f06d0e1fa720b3";
export const url=new URL("../icons/shopping_cart.svg?v=07a1c9bd21ad4b05a931e1bf601e9e19b198c500aa218cd4ebe5fda7b1c371f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

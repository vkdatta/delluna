export const name="shopping-cart-thin";
export const id="dl_fb28b26603218c4e9852";
export const url=new URL("../icons/shopping-cart-thin.svg?v=89613503c2d27999da64daf6236f1e866dcfe6c476af99f62e8e299b47d63978",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

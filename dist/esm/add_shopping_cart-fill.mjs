export const name="add_shopping_cart-fill";
export const id="dl_61bf3df1c87e68cdee5c";
export const url=new URL("../icons/add_shopping_cart-fill.svg?v=5a08516e8d3c2320574c9a2f3d4183dd6ae4a589780e30872bf854ec692f85ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

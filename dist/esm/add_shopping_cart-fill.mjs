export const name="add_shopping_cart-fill";
export const id="dl_57fb30738b3a325dd6a6";
export const url=new URL("../icons/add_shopping_cart-fill.svg?v=91661952b4c282264a7f5f50b4ed07346f6e42aacdbf8f8ca8d012c8bbb40ce2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

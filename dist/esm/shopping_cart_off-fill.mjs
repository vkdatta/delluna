export const name="shopping_cart_off-fill";
export const id="dl_6d5a6f18fc7b409ba07e";
export const url=new URL("../icons/S/shopping_cart_off-fill.svg?v=1b94a89f2dfdfaed7ad68d8aad950535e8ba4aa034f8809c681c402b19c09da1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

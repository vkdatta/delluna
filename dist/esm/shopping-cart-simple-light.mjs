export const name="shopping-cart-simple-light";
export const id="dl_ed4e62a9129944b50c23";
export const url=new URL("../icons/shopping-cart-simple-light.svg?v=e04fe123a1f02b7bc96854046a2a40030a9a723feae3e6713a6370c9b629e615",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

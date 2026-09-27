export const name="shopping-cart-simple-duotone";
export const id="dl_b2f3335521ca4ab3f183";
export const url=new URL("../icons/shopping-cart-simple-duotone.svg?v=ecc1aac195dd864728b6546e6ba6cb9f85a373fd32c1a876be15f3e283ddda1a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

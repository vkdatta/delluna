export const name="shopping-cart-bold";
export const id="dl_fc2ebfd16e45766362ef";
export const url=new URL("../icons/shopping-cart-bold.svg?v=b9c1116f0190e92e561ea698581de9622e1f52b4652b21022ec348b986e01c97",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

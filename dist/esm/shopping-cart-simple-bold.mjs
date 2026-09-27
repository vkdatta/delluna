export const name="shopping-cart-simple-bold";
export const id="dl_8d4c433e5c76ba1fb01c";
export const url=new URL("../icons/shopping-cart-simple-bold.svg?v=c79f8dc13b64e7da5a40ee78f24a3aeaa150d2304937b763dc80ea3ae1a96a0d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="shopping-cart-simple";
export const id="dl_d4b7a0a519696769ba90";
export const url=new URL("../icons/shopping-cart-simple.svg?v=b00de4362edcc4180bd1a04608eb7d653d828395ac8261e857aa433ca607a34c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="shopping-cart-thin";
export const id="dl_8003cecbf7ffc51542b9";
export const url=new URL("../icons/shopping-cart-thin.svg?v=1b1d7ffbd0d2585875da89c1d30da281278a4a3a61d029e1b4aca11e8235cd15",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

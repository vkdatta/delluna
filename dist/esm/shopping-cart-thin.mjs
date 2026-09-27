export const name="shopping-cart-thin";
export const id="dl_9a9327a158bb877fff2f";
export const url=new URL("../icons/shopping-cart-thin.svg?v=beed92e4313968ab803978d0208f1901765bc2d538383ad365899a00809e03c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

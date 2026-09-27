export const name="shopping-cart";
export const id="dl_605b009835728815984f";
export const url=new URL("../icons/shopping-cart.svg?v=81bd8ff4de670eb3190e0a70ec1f34701e1e04c046ec3862cab226226010f362",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

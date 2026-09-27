export const name="shopping-cart";
export const id="dl_4bf162752e29de98c4db";
export const url=new URL("../icons/shopping-cart.svg?v=ccc8f99628cd408459c87daf69ac1f460fd84d34717b74276c1742dc8a892e4e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

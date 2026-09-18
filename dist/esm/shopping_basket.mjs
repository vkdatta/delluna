export const name="shopping_basket";
export const id="dl_ba501801c1e047a38357";
export const url=new URL("../icons/S/shopping_basket.svg?v=2bd81ac1e43cc59d85bf5d3347de1cdf6626f090c747cfa5bcec20e61553068a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="shopping_bag-fill";
export const id="dl_50ecc40a6f7b6e78a8ba";
export const url=new URL("../icons/shopping_bag-fill.svg?v=29397d452eeef3639d8ac1bbc5cc90e6ce392ab7517014e456d9c8d72a158909",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

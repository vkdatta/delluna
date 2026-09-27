export const name="wallet-cards";
export const id="dl_d6050eeb30a0444da5ad";
export const url=new URL("../icons/wallet-cards.svg?v=1905f962c88911f9995aa8824d6eea83407bf3d197254363778387006694d0da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

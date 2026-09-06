export const name="wallet-cards";
export const id="dl_d6050eeb30a0444da5ad";
export const url=new URL("../icons/wallet-cards.svg?v=32bc2ec385bb55308c73b5fca55115ccd05b460e384d262e1398e221c91a4e21",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

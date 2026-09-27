export const name="wallet-cards";
export const id="dl_d6050eeb30a0444da5ad";
export const url=new URL("../icons/wallet-cards.svg?v=2a52c3a53d88d7f5576bddac95aa8236575999bb0b368be5ca00ec96ed1246c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="wallet-cards";
export const id="dl_d6050eeb30a0444da5ad";
export const url=new URL("../icons/wallet-cards.svg?v=1b22f49ee4fd714805c82449b5f49875a248729549706dd457ad68814977e2b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="chart-line-thin";
export const id="dl_149f8ad867e14c08aab5";
export const url=new URL("../icons/chart-line-thin.svg?v=d5e51c9bba5fc044ce1582438f616e500d789f3310a52eed9b149f3198007003",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

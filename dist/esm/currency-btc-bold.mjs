export const name="currency-btc-bold";
export const id="dl_b76d4c9b813047048a54";
export const url=new URL("../icons/currency-btc-bold.svg?v=2b27954cccb3dcecab957eceafae627f15ba08af539167daaf60f51b22dcc945",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

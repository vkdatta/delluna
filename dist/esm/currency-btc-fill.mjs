export const name="currency-btc-fill";
export const id="dl_b2d6fb887f60488e940b";
export const url=new URL("../icons/currency-btc-fill.svg?v=75f2c51163193a91f703b49d36bbe0daa28222f1590f206703ef76516f09f1ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

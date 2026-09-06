export const name="currency-btc-fill";
export const id="dl_b2d6fb887f60488e940b";
export const url=new URL("../icons/currency-btc-fill.svg?v=7d67bbe973d847502f6549d47c3c846ea1d9d6508c2f91547f7f699cde886d5d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

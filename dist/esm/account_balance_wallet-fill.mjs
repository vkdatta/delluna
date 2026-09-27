export const name="account_balance_wallet-fill";
export const id="dl_48117e5e6d0472322562";
export const url=new URL("../icons/account_balance_wallet-fill.svg?v=591da698e08354fad4c633bc94bbf40317c44b21bc1a24f7d600fef07087b076",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

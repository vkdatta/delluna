export const name="account_balance_wallet-fill";
export const id="dl_d8835e7a792d7a280138";
export const url=new URL("../icons/account_balance_wallet-fill.svg?v=fb0aafa84b5a643612babd04ea2f514d7ec57b9f50e6e96850a12d786fed5a1d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

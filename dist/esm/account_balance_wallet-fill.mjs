export const name="account_balance_wallet-fill";
export const id="dl_533454ab575343c199b3";
export const url=new URL("../icons/A/account_balance_wallet-fill.svg?v=fed5e4bb6459de76c3047833e8e7c3f2823acea552fecf95edeffb1fff01520e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

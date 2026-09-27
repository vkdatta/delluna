export const name="account_balance_wallet-fill";
export const id="dl_473b327367dbf32f2a60";
export const url=new URL("../icons/account_balance_wallet-fill.svg?v=ae59e72d62b3d9224e535b2f58220ef5eab0655f5c9cfc4aff4c4be7b7d6d22c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

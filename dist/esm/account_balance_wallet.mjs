export const name="account_balance_wallet";
export const id="dl_9883333656825ec39060";
export const url=new URL("../icons/account_balance_wallet.svg?v=feb466d180519d0cea2b4d0dccb0eb7c67fbd19fb169009284e2203d1a0bb42f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

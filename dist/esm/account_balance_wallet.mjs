export const name="account_balance_wallet";
export const id="dl_3fe563033aa448169f9c";
export const url=new URL("../icons/account_balance_wallet.svg?v=7367de6c6288542bd3d18da290de212d70f1c16a7c5fd9eeed1774da2e1b40b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

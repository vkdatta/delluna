export const name="account_balance_wallet";
export const id="dl_07d975f0a4b4b22dcdb2";
export const url=new URL("../icons/account_balance_wallet.svg?v=99cf8e755cc0c9175dadbd415ea9079aed727aeb5ef447683c234bf240ab2247",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

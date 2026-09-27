export const name="account_balance_wallet";
export const id="dl_334ef5e2740a598ee065";
export const url=new URL("../icons/account_balance_wallet.svg?v=2455088d1c7e558c9cdddadf40cc51a795bed755eee42a7e7fc9511389df7f88",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

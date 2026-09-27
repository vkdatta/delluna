export const name="account_balance-fill";
export const id="dl_e8c7e47e06f215e59add";
export const url=new URL("../icons/account_balance-fill.svg?v=ab8bba720aa9acd8227bff4d91c2177026a5423cefaabb027c908419f674092e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

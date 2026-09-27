export const name="account_balance-fill";
export const id="dl_155c2a857e1fc76efbb8";
export const url=new URL("../icons/account_balance-fill.svg?v=b54de4c2d330a69359efd159b2e56dea2346b2a852d5e24ba3a646e591d67fca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="account_balance";
export const id="dl_59491c006993c56f0cf9";
export const url=new URL("../icons/account_balance.svg?v=765fd103a84fdbccc2c084d74d1e22824fdc963203ce8c1225b23ed3e4e9f67a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

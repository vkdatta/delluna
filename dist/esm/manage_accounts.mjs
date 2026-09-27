export const name="manage_accounts";
export const id="dl_4a3be5bbd56735ed603a";
export const url=new URL("../icons/manage_accounts.svg?v=ff8a081fce1d50a002fd097fe114370251b4a3538cc321ed601c70da4f3030b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="subscriptions";
export const id="dl_d321c9ccf18313fa6e21";
export const url=new URL("../icons/subscriptions.svg?v=b80e8249b2187e7deab58797204312f933a20bf3e314c26a8bb2607a93ed75a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

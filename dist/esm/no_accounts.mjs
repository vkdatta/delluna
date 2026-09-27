export const name="no_accounts";
export const id="dl_9590d5c9b663ec16c4f5";
export const url=new URL("../icons/no_accounts.svg?v=d962458b37f6d8a8b3047f9870c25fe2f4578a5776037f97a104905b14b6952e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

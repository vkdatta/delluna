export const name="account_tree";
export const id="dl_9010dc6e12254a28b2b4";
export const url=new URL("../icons/account_tree.svg?v=dda634a09d08ac089ecfd533d24a6203ba66160421fc14b3cd80cc8354dcf5fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

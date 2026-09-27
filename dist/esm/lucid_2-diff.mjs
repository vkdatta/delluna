export const name="lucid_2-diff";
export const id="dl_84b8a3c90e4d485eb9fc";
export const url=new URL("../icons/lucid_2-diff.svg?v=dd168098b8246c40af1674035278bdaf8413c16e0ee1b93bfe99e035733c130b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

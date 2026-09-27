export const name="sort-descending-duotone";
export const id="dl_2f154442b254ebcd07f1";
export const url=new URL("../icons/sort-descending-duotone.svg?v=4e934c2a12cd8e2276ace6496b058521ed24a6f0508092de692e15dbcc149732",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

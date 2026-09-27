export const name="all_inclusive";
export const id="dl_ac74fda7d865e53f6f5a";
export const url=new URL("../icons/all_inclusive.svg?v=08e0fee318a1bb2f34e0c1707211c2e69602718eb75ecb32b91551227957453e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

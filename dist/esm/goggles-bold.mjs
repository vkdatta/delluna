export const name="goggles-bold";
export const id="dl_7b266cc7dc524e4d856b";
export const url=new URL("../icons/goggles-bold.svg?v=efd5d22e8c01b61ab7d0173208e09bfc130be946d39d2f1608fafcd14ced5309",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

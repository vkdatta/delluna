export const name="shopping-bag-open-duotone";
export const id="dl_f65273e321924b708c53";
export const url=new URL("../icons/S/shopping-bag-open-duotone.svg?v=55ff33fb3aadf13278c8613de82f90b7c0e50e53f67cfdd56b744ab8ea7b8a10",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

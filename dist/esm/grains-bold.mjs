export const name="grains-bold";
export const id="dl_607c0b03ad464defb8d9";
export const url=new URL("../icons/grains-bold.svg?v=b8b794457c7c684285e9d7c2067e7c7787ea9cd49a7c6379a45615c498c44c6b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="television-duotone";
export const id="dl_120223104690af4e4fb4";
export const url=new URL("../icons/television-duotone.svg?v=7da15187abe4adec06ac49a53116ed1a87c1075090b265b29d4904a8ef618319",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

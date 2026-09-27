export const name="bread-duotone";
export const id="dl_9e65262ec382429889ee";
export const url=new URL("../icons/bread-duotone.svg?v=c3b8dba2662cd5221bcf82314a5bc5d3f7d4e3b9e7e0e4cac539a5a0ca3f4295",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

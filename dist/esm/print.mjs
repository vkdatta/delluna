export const name="print";
export const id="dl_d72f06d2b1be7d421ba6";
export const url=new URL("../icons/print.svg?v=28835ccbf37e96913b16461f8aff878041480c94a38c1190ce59d27ec240e192",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

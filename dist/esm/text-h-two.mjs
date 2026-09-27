export const name="text-h-two";
export const id="dl_b91395637211da7484b3";
export const url=new URL("../icons/text-h-two.svg?v=4f7aa28bb38efcce7d00531a635d5db7c6e4d04d8add25617203238669d6a0bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

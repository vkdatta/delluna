export const name="arrow-bend-down-left-bold";
export const id="dl_a0d9e4ee5b204e7eaeda";
export const url=new URL("../icons/arrow-bend-down-left-bold.svg?v=7d6446fc1d509a6d12947702282d270da0dd9d5d9fa15361c8bd91a9f5bac82e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

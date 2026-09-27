export const name="heap_snapshot_large";
export const id="dl_dbd149467ea719e2fd50";
export const url=new URL("../icons/heap_snapshot_large.svg?v=50a4822177bbc2804353cb3051a5222181dae5110ff44a4344a607ae41441f81",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

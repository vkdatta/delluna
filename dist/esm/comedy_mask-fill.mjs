export const name="comedy_mask-fill";
export const id="dl_c2638c0a2cc9cbb6d919";
export const url=new URL("../icons/comedy_mask-fill.svg?v=ad4a4953adc6307ff275d8003c85c0c6027ec16b672e546d7656ca327482c43a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

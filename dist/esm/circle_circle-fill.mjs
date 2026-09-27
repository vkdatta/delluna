export const name="circle_circle-fill";
export const id="dl_8d57b0991d604d6efc0b";
export const url=new URL("../icons/circle_circle-fill.svg?v=4d9cd7ae5892930fe67228fb071603ad64c3b2a84cb0fa5eff60e2d7148d96c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="hoodie-fill";
export const id="dl_17a217bac6e946d1941b";
export const url=new URL("../icons/hoodie-fill.svg?v=0255383a671a3ae76dd041441c3253e6d3123626add743d8f846613c7edf2693",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="9mp";
export const id="dl_a31a5d3c15a8977945f6";
export const url=new URL("../icons/9mp.svg?v=e972c06cdc0dd286ae08748fc7d15627c443a9f609e65d0f64d0e2ce4f27b49a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

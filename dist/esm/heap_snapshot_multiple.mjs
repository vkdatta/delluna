export const name="heap_snapshot_multiple";
export const id="dl_06c5da1a6c0447ca9d2f";
export const url=new URL("../icons/heap_snapshot_multiple.svg?v=cd30764e6ab4a0cec6f5641cae64f4b756ea50bb9489670db0981e18a6e0b66c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

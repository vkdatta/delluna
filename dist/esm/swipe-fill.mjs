export const name="swipe-fill";
export const id="dl_a291321fbbfe862fba28";
export const url=new URL("../icons/swipe-fill.svg?v=bc81ffc4df5b36b3d3551894c8e483a0f2cecbf61668dd5e3fb41784edfa0572",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="view_kanban-fill";
export const id="dl_fa9655d315937398f144";
export const url=new URL("../icons/view_kanban-fill.svg?v=a8c8a452c0e5b5c346dd98e0d21aaac027d0183450efa05a7346e4137267e7ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

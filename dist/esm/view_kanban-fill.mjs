export const name="view_kanban-fill";
export const id="dl_0f922095039508384c9b";
export const url=new URL("../icons/view_kanban-fill.svg?v=d6b7558aa713c1b7fa1f9dfd8a9c70b1c17965d33bfb351844a9732a7fcd88ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

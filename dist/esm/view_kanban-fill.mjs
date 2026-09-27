export const name="view_kanban-fill";
export const id="dl_0bf339b12994f813783c";
export const url=new URL("../icons/view_kanban-fill.svg?v=3861ca20751ca8f8251d93b3f9e4d7df2cf65818f563d6d82f2615922a0e12da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

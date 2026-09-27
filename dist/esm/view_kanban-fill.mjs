export const name="view_kanban-fill";
export const id="dl_38ff9f352cdefb9cbd52";
export const url=new URL("../icons/view_kanban-fill.svg?v=91491b43a6da74194416632f5cefd56ca2d400cf6d76526eadf77a3298af5714",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

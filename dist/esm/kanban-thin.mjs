export const name="kanban-thin";
export const id="dl_32e8cf52a8764dd4a209";
export const url=new URL("../icons/kanban-thin.svg?v=12290d8d487ed7d4a0da072006dbb89f3a1520797525f63eb72dba4e62e89bd7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

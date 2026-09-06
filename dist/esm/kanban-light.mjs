export const name="kanban-light";
export const id="dl_00a09b9dd60a4c5db533";
export const url=new URL("../icons/kanban-light.svg?v=2f357e9fd7175c146a283a081625cbcdd1a381a1ef404d4056b48f86f8b3ceae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

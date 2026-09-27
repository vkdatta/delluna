export const name="lucid_2-folder-kanban";
export const id="dl_8f5086cd7c3440c582e0";
export const url=new URL("../icons/lucid_2-folder-kanban.svg?v=fbb42a3977b09574e13d96d484b5d14f63d21aeb6c9c313856be9cbe454fb2cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

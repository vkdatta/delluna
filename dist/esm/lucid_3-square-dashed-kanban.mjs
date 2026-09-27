export const name="lucid_3-square-dashed-kanban";
export const id="dl_4d269de690e045368dfd";
export const url=new URL("../icons/lucid_3-square-dashed-kanban.svg?v=6e32036c7ed555aae97333c25d4c92b7f15f4065acfc5d3c911723c5c6f8e0a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

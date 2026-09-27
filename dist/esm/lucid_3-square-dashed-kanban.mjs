export const name="lucid_3-square-dashed-kanban";
export const id="dl_4d269de690e045368dfd";
export const url=new URL("../icons/lucid_3-square-dashed-kanban.svg?v=1500af40c9d526ce12b340a741436b0f3f6a315154a348c0dd1730011a13af7d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

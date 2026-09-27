export const name="kanban-bold";
export const id="dl_11d2754d038e461cb9b5";
export const url=new URL("../icons/kanban-bold.svg?v=416e9aa6be51a6c421eecfc85a71ffd6dc1072534ac1fdeb054a65f705ddadf4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

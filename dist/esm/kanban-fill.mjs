export const name="kanban-fill";
export const id="dl_86d17025b72241649814";
export const url=new URL("../icons/kanban-fill.svg?v=5640661e4e3018b2533e03ce7566a7e91944fe65b58f09cd57f89b55334a27e7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="add_task-fill";
export const id="dl_ce30a05f145f6a2b43e4";
export const url=new URL("../icons/add_task-fill.svg?v=1fa47d3bd539a59b44ceacaa9fe56706b6e62f2cfb34cc3f0be05be39d048acd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

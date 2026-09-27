export const name="kanban-fill";
export const id="dl_86d17025b72241649814";
export const url=new URL("../icons/kanban-fill.svg?v=cd22599303f3247bc292eeedc0fb0aed1fd49459e0883eac5460ba886a42f3d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

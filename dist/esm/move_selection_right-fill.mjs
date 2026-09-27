export const name="move_selection_right-fill";
export const id="dl_f1d3177b90f82e582066";
export const url=new URL("../icons/move_selection_right-fill.svg?v=24d4fe5b60fe437a591aa844ed4b4f93d3401f8ef45d45cd8a7c087a46ec5f65",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

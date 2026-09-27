export const name="move_selection_up-fill";
export const id="dl_fc7bb60bfe9d2b2e5460";
export const url=new URL("../icons/move_selection_up-fill.svg?v=e8e24c2955f43d4a5f19eb7917df896d4b321fbe9e2d7116f89cd8b11e956a9a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

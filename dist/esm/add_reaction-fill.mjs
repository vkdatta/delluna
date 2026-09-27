export const name="add_reaction-fill";
export const id="dl_7265af32d9d374b878d7";
export const url=new URL("../icons/add_reaction-fill.svg?v=2697c76fee68e8b1f05de808a7cf39586730db656ea2516ba87c8ee9ace62a55",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

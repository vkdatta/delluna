export const name="table_view-fill";
export const id="dl_eb83a995464bd4568f67";
export const url=new URL("../icons/table_view-fill.svg?v=7d0a731476023ce305d98d51650c8f52787dd86eb9b8ac51f346f56f40796182",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

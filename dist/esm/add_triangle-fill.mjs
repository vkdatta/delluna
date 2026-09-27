export const name="add_triangle-fill";
export const id="dl_34958a98e9fb240dec87";
export const url=new URL("../icons/add_triangle-fill.svg?v=c650d7ea7fdbb56ebdc3d79b990733f368eb161a7dbc2e07e1e8cbc2dfda086c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

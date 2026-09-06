export const name="flower-tulip-fill";
export const id="dl_26eb6308c14f4683a24d";
export const url=new URL("../icons/flower-tulip-fill.svg?v=71e4985011612fb07ff30489ab7d45abccb4231e22a748acd351a3add14252ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

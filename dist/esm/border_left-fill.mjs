export const name="border_left-fill";
export const id="dl_00355099ba6f29c0f675";
export const url=new URL("../icons/border_left-fill.svg?v=12007981db125c561486b4770aa6911b7d89b9eedd0865b877c4e7e4231497e3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="pen_size_5-fill";
export const id="dl_77b90f5461c2ab52fd72";
export const url=new URL("../icons/pen_size_5-fill.svg?v=674b51e351946373d7441167fefe8c9d9b6fdceb356622dff47b7a3d08a507d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

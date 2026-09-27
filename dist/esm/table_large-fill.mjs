export const name="table_large-fill";
export const id="dl_4d0a2d9bd9fa9e2a34b0";
export const url=new URL("../icons/table_large-fill.svg?v=552e8c3fde7d3f79b319c1fe7c9d5338ed83be3886c01fde5dd3d951afae12e3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

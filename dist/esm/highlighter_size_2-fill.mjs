export const name="highlighter_size_2-fill";
export const id="dl_cb3fa2eeeedb8fe170e1";
export const url=new URL("../icons/highlighter_size_2-fill.svg?v=0827f130d8db1841e900ba2cfbed76447b5224ff234b4eb5f1a55ab9c9a0fbc1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="line_end_square-fill";
export const id="dl_bec6e68615e82b9f42e8";
export const url=new URL("../icons/line_end_square-fill.svg?v=f6ece4e9843a72de13409e1de865771b90f688d066f96f9bca0e16823f7e49e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="trail_length_short-fill";
export const id="dl_3b95ded476c8aacb964e";
export const url=new URL("../icons/trail_length_short-fill.svg?v=7dca4c75be3ef4eee6dbe67e56b545c2747b23a5a13f63008f5dabef239a09a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="add_triangle-fill";
export const id="dl_3911608dba1e0d97227c";
export const url=new URL("../icons/add_triangle-fill.svg?v=5fd066f47a64e9f5e162feed24ee2c20aaa759d131c0c41acdbcd1734a1b2a62",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

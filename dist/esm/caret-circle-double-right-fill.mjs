export const name="caret-circle-double-right-fill";
export const id="dl_4b8616a9233b4f63a874";
export const url=new URL("../icons/caret-circle-double-right-fill.svg?v=8c1b549013a7834459f5d3c772d105524a888c23c660e34cdffd49c67e29d26c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

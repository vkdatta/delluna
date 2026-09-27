export const name="query_stats";
export const id="dl_ccc67786ce93bd820812";
export const url=new URL("../icons/material_symbols/query_stats.svg?v=6dc8431ab01f9b3fbad9f25bd12ef9fc8dd6d55f80e1a86e9173d8e31d578e66",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

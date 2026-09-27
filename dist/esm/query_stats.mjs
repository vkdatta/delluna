export const name="query_stats";
export const id="dl_067b38dd4c645ea8cf5b";
export const url=new URL("../icons/material_symbols/query_stats.svg?v=7785a09b66520a87d6231b4687f9b5e0961a5c5311cfd10193cf75a06a3495eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

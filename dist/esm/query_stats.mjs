export const name="query_stats";
export const id="dl_f8aba8cfbe8c1d4ba230";
export const url=new URL("../icons/material_symbols/query_stats.svg?v=e2725e5695284c86e429a5fcee530f60d7c03f9cfcec6a2c3ac4b887e35fd809",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

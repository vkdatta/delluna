export const name="query_stats";
export const id="dl_c8349879d2f0b5a9d0c8";
export const url=new URL("../icons/material_symbols/query_stats.svg?v=2236d5d7c3982d736d9803f02db344bd16e09dde38864b124589458f5265b654",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

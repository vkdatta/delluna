export const name="chart-polar";
export const id="dl_6eb8e245a3ae46b19c1a";
export const url=new URL("../icons/chart-polar.svg?v=b4edaab3efdc176981b66a4c4211254136c802d1ec701659ea557c7886ce4cae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

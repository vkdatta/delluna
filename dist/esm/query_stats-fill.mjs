export const name="query_stats-fill";
export const id="dl_9e1d0212744aaf9b4559";
export const url=new URL("../icons/query_stats-fill.svg?v=1ca2aea0120f6b7e21e30da652f07eb5745b4d42981063780b822e92f86d058d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

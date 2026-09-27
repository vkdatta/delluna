export const name="query_stats-fill";
export const id="dl_3ad804359ec687669676";
export const url=new URL("../icons/query_stats-fill.svg?v=15f00c0eca8e8b3e109c3338bf63083f138f89a9d22028142c0462e80ad82f53",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="log";
export const id="dl_0a2f5bcf33504a06bf47";
export const url=new URL("../icons/log.svg?v=fc180c232cdf19616bf5c55225259d2d8c2f5c5a4d843643513bd31e568bde07",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

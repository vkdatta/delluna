export const name="not-superset-of";
export const id="dl_3264b29c072a4be2b498";
export const url=new URL("../icons/not-superset-of.svg?v=e7056e74949a8ef18df4211904f31d51f79885cf1f82d2a82c97afd7890bd256",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

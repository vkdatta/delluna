export const name="not-superset-of";
export const id="dl_3264b29c072a4be2b498";
export const url=new URL("../icons/not-superset-of.svg?v=48d13e1dcabad497fc9fbadb67c8f2f51cdce7a4c050bcbad96e8964729a5353",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

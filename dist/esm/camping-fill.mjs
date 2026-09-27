export const name="camping-fill";
export const id="dl_9ff99beb0dc75c5d05cd";
export const url=new URL("../icons/camping-fill.svg?v=8d713010c6ba00cc5537991f740a7229e265001593a796ca26d204aedfc31c43",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

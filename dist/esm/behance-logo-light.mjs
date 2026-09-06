export const name="behance-logo-light";
export const id="dl_6d3632e8a8924f1dbb30";
export const url=new URL("../icons/behance-logo-light.svg?v=7b1505f7d8b23f0293df9526e90ba0faa4613a67476e931b4d08c24cb3c6277e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

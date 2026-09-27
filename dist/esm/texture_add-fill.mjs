export const name="texture_add-fill";
export const id="dl_63ce7f3fce3e489d5930";
export const url=new URL("../icons/texture_add-fill.svg?v=37af0ef22bf7f9182f914b1083a8f0e000cf33f26c983792bde1c309e4613af6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

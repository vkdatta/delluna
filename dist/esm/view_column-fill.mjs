export const name="view_column-fill";
export const id="dl_d37a58d71ee90ea688f6";
export const url=new URL("../icons/view_column-fill.svg?v=c3fe0725fac72dd63e0891dfe8c03a94dd6da77965167059d9c974f5ad49af0a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

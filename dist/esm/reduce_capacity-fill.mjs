export const name="reduce_capacity-fill";
export const id="dl_ca61530b6edb4ef8be0c";
export const url=new URL("../icons/reduce_capacity-fill.svg?v=75295a7b25b10aa2dde846c6a2892f9beb5ad124055661f16f27b3771e6c4717",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

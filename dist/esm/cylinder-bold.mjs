export const name="cylinder-bold";
export const id="dl_cba4daf3ed524cad9f5f";
export const url=new URL("../icons/cylinder-bold.svg?v=ed9da608d0d3c1ec0e6b9d2a62e2cf62d606fd15357f23161b8081a9a82b92a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

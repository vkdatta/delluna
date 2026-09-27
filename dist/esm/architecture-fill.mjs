export const name="architecture-fill";
export const id="dl_b9e45306fab36f8c9cf7";
export const url=new URL("../icons/architecture-fill.svg?v=de3dffb57a3b48d2ade5552fae392318925ba6cd23a1f210c0c6b66960aa1e50",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

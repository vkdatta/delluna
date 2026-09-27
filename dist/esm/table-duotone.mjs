export const name="table-duotone";
export const id="dl_bc38643767bf990d7783";
export const url=new URL("../icons/table-duotone.svg?v=b4ba5f8329b92fd30d01eab3b09568ab3cae762fa9a6923ac330f7585a5f18be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

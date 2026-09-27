export const name="architecture-fill";
export const id="dl_e2f8c42d3b9dd49cb145";
export const url=new URL("../icons/architecture-fill.svg?v=cda475a1d49a3fa9e7b19b5e0e3dbc9e3f970c024d58721e1191d415d5049f0b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

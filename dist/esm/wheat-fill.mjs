export const name="wheat-fill";
export const id="dl_20350237af15058392f0";
export const url=new URL("../icons/wheat-fill.svg?v=fac6d3dab7df9e425ae04688bd4c91f28bcbb01c81c827e176d30859e4ac03a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

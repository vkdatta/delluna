export const name="remove-fill";
export const id="dl_7e0024e3d3ee8fb3270f";
export const url=new URL("../icons/remove-fill.svg?v=ab80bc869daadd57ed3e0300dd4f6dfd3375f7fe2b73842a34dba84c7d3dd524",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

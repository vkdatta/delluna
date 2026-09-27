export const name="intersect";
export const id="dl_c07a1f8cf7d4447aa2b7";
export const url=new URL("../icons/intersect.svg?v=dbaa089844a924f88bf7ca86299ef30806ad82f0d1178ca67a195da65d9716ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

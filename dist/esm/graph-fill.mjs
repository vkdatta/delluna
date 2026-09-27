export const name="graph-fill";
export const id="dl_237740bfad804fa1a40e";
export const url=new URL("../icons/graph-fill.svg?v=0612df52f6a3d641b29c0748b7dea94941209d0b991a5c70676ca1968d0736a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

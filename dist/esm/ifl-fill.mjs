export const name="ifl-fill";
export const id="dl_d59cdef5d0ad0e73552c";
export const url=new URL("../icons/ifl-fill.svg?v=c4df934249ca4bdba7b164d3b8e776d7ebc9398536e7d84869edcb69164605be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

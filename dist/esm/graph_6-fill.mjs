export const name="graph_6-fill";
export const id="dl_6570138491f35bb39125";
export const url=new URL("../icons/graph_6-fill.svg?v=6ac01f51a99ae0ff6d32dec4f9175f0109576f5cde155f8a6480e78aec541708",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

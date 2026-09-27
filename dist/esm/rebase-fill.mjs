export const name="rebase-fill";
export const id="dl_781b677091841a88a5c6";
export const url=new URL("../icons/rebase-fill.svg?v=b61e3d3c13f62c4ac320f294d54ca922c03ae05f219e0c207aecb75c67e8a43c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

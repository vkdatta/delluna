export const name="folder-fill";
export const id="dl_49020dd03fe14d9d9d3b";
export const url=new URL("../icons/folder-fill.svg?v=0768a0740c07635f43c6c4a2ff59aced9a0132ba6f6c9df15650941c50b515cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

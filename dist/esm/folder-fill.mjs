export const name="folder-fill";
export const id="dl_49020dd03fe14d9d9d3b";
export const url=new URL("../icons/folder-fill.svg?v=2217bd2f730884d7a8aec3e3358eb7500448b0e3d86f33a63142f40f0622bfe9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

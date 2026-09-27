export const name="folder-bold";
export const id="dl_cec3d4e41261436f9d7d";
export const url=new URL("../icons/folder-bold.svg?v=eb3379d3288a188adfb9025b6f5427b2623fa491a5a85364e13c1ac19847721b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

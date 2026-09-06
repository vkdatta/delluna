export const name="folder-bold";
export const id="dl_cec3d4e41261436f9d7d";
export const url=new URL("../icons/folder-bold.svg?v=3f564dd4a0d27706ff9cb2d9738cef9ac1009b70f82d1da6d3bac119e41949a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

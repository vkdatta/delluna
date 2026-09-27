export const name="add_road-fill";
export const id="dl_196432ed139b49fb2a80";
export const url=new URL("../icons/add_road-fill.svg?v=625f5f84ace5cfc628edc9c01f542f016a70a305a26475db2c4d00d3d9824b2b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

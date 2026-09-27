export const name="watch_arrow";
export const id="dl_07d8822482ae6beadf92";
export const url=new URL("../icons/watch_arrow.svg?v=4b8b25a81f464217cba5ebb9903a54870fb0eef40287d026a84b120f0dee44fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="heap_snapshot_thumbnail";
export const id="dl_9889b6a80b8955a7ab38";
export const url=new URL("../icons/heap_snapshot_thumbnail.svg?v=39b8594c419df1c9e39a0bba9cc228896a226323a9d6fad385543128639b47f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

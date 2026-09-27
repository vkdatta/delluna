export const name="heap_snapshot_thumbnail-fill";
export const id="dl_1cbb49443cbe066d08db";
export const url=new URL("../icons/heap_snapshot_thumbnail-fill.svg?v=6dc1dda35c651ece9286a4e0b74d5e8922f7501834bcf84070d3d01717c15595",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

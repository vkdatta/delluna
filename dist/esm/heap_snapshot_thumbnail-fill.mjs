export const name="heap_snapshot_thumbnail-fill";
export const id="dl_70dd604518f5bb2b001d";
export const url=new URL("../icons/heap_snapshot_thumbnail-fill.svg?v=ad2d013cb9a0f13343fded9734a0da243e15e44b247c3f23a3c93c10339e6b07",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

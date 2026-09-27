export const name="heap_snapshot_thumbnail";
export const id="dl_0caea657dabca40631bb";
export const url=new URL("../icons/heap_snapshot_thumbnail.svg?v=f94d3395d2e5dafb08ad0fee2b17707a7532a5e93a49d77a741725085d5e8d45",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

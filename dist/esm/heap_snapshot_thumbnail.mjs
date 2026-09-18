export const name="heap_snapshot_thumbnail";
export const id="dl_224bbc34528d48e39d28";
export const url=new URL("../icons/H/heap_snapshot_thumbnail.svg?v=e477d5fda5dc955c941d2365a93f1a787c59cc346ed458ebf991214d682c34b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

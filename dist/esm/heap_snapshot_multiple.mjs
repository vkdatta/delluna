export const name="heap_snapshot_multiple";
export const id="dl_0823fe70483bdac19a8a";
export const url=new URL("../icons/heap_snapshot_multiple.svg?v=7903462b3ddd5a7f4063c768ff7d3bf437149ceba319c77dfca47dcd8c9a9185",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="heap_snapshot_large-fill";
export const id="dl_c2ba4b78cb6d1f30d3a3";
export const url=new URL("../icons/heap_snapshot_large-fill.svg?v=abc408f78497257441065baaa95db3b4bc4157304f25695a0449cb048d792257",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

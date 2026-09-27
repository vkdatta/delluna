export const name="heap_snapshot_thumbnail-fill";
export const id="dl_ae45d4503f85edd0a3a6";
export const url=new URL("../icons/heap_snapshot_thumbnail-fill.svg?v=cf82b0745f761cfd457c68679bffbb1856b7b02f366c82fa68c98d7098f5e77c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

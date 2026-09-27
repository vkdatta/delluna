export const name="heap_snapshot_large";
export const id="dl_742a244a4121735470cd";
export const url=new URL("../icons/heap_snapshot_large.svg?v=3c316be51b45bc55593be1168cf86b5df055e927065951509b80aa112155a621",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="heap_snapshot_multiple";
export const id="dl_3fb21b5b474f720cb505";
export const url=new URL("../icons/heap_snapshot_multiple.svg?v=b8d0c395edaf05f4b4f75d55732affcfbb07f6aecd8f0bd2479ca3c489c9b750",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

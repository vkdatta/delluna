export const name="thread_unread-fill";
export const id="dl_dc17c6c595a5371c4c39";
export const url=new URL("../icons/thread_unread-fill.svg?v=700ebeac0a3794ace5903f54235f31b073026721e68d45f670a01afcd5cfe8b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

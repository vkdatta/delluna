export const name="queue_music-fill";
export const id="dl_3ed2329cf09e48148a8c";
export const url=new URL("../icons/Q/queue_music-fill.svg?v=f78c46274ac225b55fdc7a9b4fb2dc30213f68c9973687deabdcff21bd2ca5bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

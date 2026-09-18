export const name="queue_play_next-fill";
export const id="dl_71c8491f676b4db1b75a";
export const url=new URL("../icons/queue_play_next-fill.svg?v=b67220c1e90d28654dd988e786b320a1429f127a0ea7eb654a4e6ec4167913c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

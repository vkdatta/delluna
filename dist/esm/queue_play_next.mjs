export const name="queue_play_next";
export const id="dl_56d9dea888ef48a3a5ff";
export const url=new URL("../icons/queue_play_next.svg?v=2360fd200b59d604729ebfc2b8acfdbc4902938882271fc059cf0863ee6cf794",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

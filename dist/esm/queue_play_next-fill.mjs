export const name="queue_play_next-fill";
export const id="dl_94a0502a0cd7af19d199";
export const url=new URL("../icons/queue_play_next-fill.svg?v=456726471f4fe9a5e1ffa5b3a6466c19c1f6959059cfc8af612af10ca6d431a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

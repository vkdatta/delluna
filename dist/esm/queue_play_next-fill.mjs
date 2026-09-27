export const name="queue_play_next-fill";
export const id="dl_f3ee813209d41b82291a";
export const url=new URL("../icons/queue_play_next-fill.svg?v=21182ac0b63aae496b989627d965dd2476dea8a0698c153222550b656f0c2fcd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

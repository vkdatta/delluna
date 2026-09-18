export const name="timer_play-fill";
export const id="dl_ad39316e9cdc466e8c97";
export const url=new URL("../icons/timer_play-fill.svg?v=b4f4f60fead45a221c26ae0bd6dfadefbf0285d69d6e08b3287a806524f810c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

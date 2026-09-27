export const name="timer_2-fill";
export const id="dl_f517fc1e506b57d19a81";
export const url=new URL("../icons/timer_2-fill.svg?v=6c686bf9e045ce7f2430f842bd86e5123c77c26417c1f554aeae212680530f3a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

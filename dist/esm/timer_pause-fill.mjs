export const name="timer_pause-fill";
export const id="dl_0f1eb9afb1693a344cd2";
export const url=new URL("../icons/timer_pause-fill.svg?v=da9d78663e5a257a78566d3021f1515b4ba312ad453c31fbb35489f92a0951ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

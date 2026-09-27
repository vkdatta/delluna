export const name="timer_5";
export const id="dl_50273f0070c9f125c097";
export const url=new URL("../icons/timer_5.svg?v=ed0c67c135884c2a5bf3dd99e8482ad347fe703436d4fe7e5b0c1210be1ac00b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

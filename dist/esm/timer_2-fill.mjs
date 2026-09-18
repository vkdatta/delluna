export const name="timer_2-fill";
export const id="dl_1e72b02994384b0ba0e7";
export const url=new URL("../icons/T/timer_2-fill.svg?v=9ca7d23d60ef6fea9ac5d8733e7146b2790765936e39acd5b765e68f88721b9f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

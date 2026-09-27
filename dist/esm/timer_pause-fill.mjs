export const name="timer_pause-fill";
export const id="dl_a35255fd0db1e640327f";
export const url=new URL("../icons/timer_pause-fill.svg?v=4718d72c95bcab19ff6b7993972b2e44f1309c1e76ccc787ea8697c15d7a7950",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

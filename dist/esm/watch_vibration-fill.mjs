export const name="watch_vibration-fill";
export const id="dl_8fcedb3c9732b00b6b4a";
export const url=new URL("../icons/watch_vibration-fill.svg?v=921e9ece221ecbe4f64aa009eb8f37058d14e16abbb93c81859a2f676d3c1d1c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

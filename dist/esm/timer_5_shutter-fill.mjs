export const name="timer_5_shutter-fill";
export const id="dl_0c01c5d2cc17514df620";
export const url=new URL("../icons/timer_5_shutter-fill.svg?v=89d80f5631213015403c9c777eb00010f1e9e57fef37ac273f4796c19e5e68c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="flashlight_off";
export const id="dl_daa5d96e49f15fdf6766";
export const url=new URL("../icons/flashlight_off.svg?v=fb714f3b863d8a6d4a6544901c26824adf41188490baa65f17cabe2804ed5aa1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

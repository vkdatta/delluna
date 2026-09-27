export const name="calendar_lock";
export const id="dl_03b23d2cb327b532c0e6";
export const url=new URL("../icons/calendar_lock.svg?v=dca92dd1645eeab000a41415076d4789a66377edb8a2f8f0985888cb0f4827b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

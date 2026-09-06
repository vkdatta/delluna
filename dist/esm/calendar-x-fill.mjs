export const name="calendar-x-fill";
export const id="dl_5cab7cc6ef4c476782f3";
export const url=new URL("../icons/calendar-x-fill.svg?v=c591a793ccec3f14b51a0d1cb1e936b35a5caccb52250d0217b19354ddea7de3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

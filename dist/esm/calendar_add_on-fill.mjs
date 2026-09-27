export const name="calendar_add_on-fill";
export const id="dl_995ac8f7c64502a5b637";
export const url=new URL("../icons/calendar_add_on-fill.svg?v=6c5964935f3311f6f4e1dbcc5d84b12ad18559ae36bd5c8455e9498d7c88aaa0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="calendar_today-fill";
export const id="dl_ee1cede1af0cdf7e867b";
export const url=new URL("../icons/calendar_today-fill.svg?v=4b1691ee7fbf3145eef2b5e692e45ac46fb24fa730df1b105b3b95dcb579f6c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

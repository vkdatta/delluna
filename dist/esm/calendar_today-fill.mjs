export const name="calendar_today-fill";
export const id="dl_b2cf34f8b7a142f4a45e";
export const url=new URL("../icons/calendar_today-fill.svg?v=7353171e5de93e7b7758008b715ea4b2c246619d0b37f3435f5626396fe599b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="perm_contact_calendar-fill";
export const id="dl_db7b548bb38afee190c5";
export const url=new URL("../icons/perm_contact_calendar-fill.svg?v=af52aa0a78bd44ffb2a3965d1fffa4753bc6befb1b5295876529fc16079885ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

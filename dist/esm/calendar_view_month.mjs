export const name="calendar_view_month";
export const id="dl_4b265c6f9549f8ad7913";
export const url=new URL("../icons/calendar_view_month.svg?v=e08f8257e5ddbd6c75923fed2409720474ceb757e3a0d731b034b94f49c6036e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

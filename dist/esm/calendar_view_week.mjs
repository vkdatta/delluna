export const name="calendar_view_week";
export const id="dl_dad3e4244b42cab5a779";
export const url=new URL("../icons/calendar_view_week.svg?v=2eb965b29d8365c396ea066932ff02300a0873052cb6bfbd1691fe720d926782",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

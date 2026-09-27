export const name="calendar_month";
export const id="dl_48ab73e90888891330ab";
export const url=new URL("../icons/calendar_month.svg?v=236b807fd8dda1491104b067c141bed98bc5b81ea87ac446c079d0760ca6dc29",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

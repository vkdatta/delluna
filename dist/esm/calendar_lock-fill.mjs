export const name="calendar_lock-fill";
export const id="dl_9f923095a111002b9fa3";
export const url=new URL("../icons/calendar_lock-fill.svg?v=d5b00fda88ca8e17a9aaa96d48a31a64ea9de12bc42e7ff328d982af00aa55c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

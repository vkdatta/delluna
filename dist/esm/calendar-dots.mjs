export const name="calendar-dots";
export const id="dl_f5da4ba68b7d4e21b7f0";
export const url=new URL("../icons/calendar-dots.svg?v=2a76fae73a021060a223d5c291f12369be71c4d02cba257f0e04bc4dd6daca54",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

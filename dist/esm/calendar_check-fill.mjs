export const name="calendar_check-fill";
export const id="dl_854dc7d71683c460a97f";
export const url=new URL("../icons/calendar_check-fill.svg?v=21ca649819ca14e61713d94b769caa9943680392d0171ccea822c70a47d332dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

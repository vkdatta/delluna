export const name="calendar-plus-fill";
export const id="dl_ba102680c8f244a88aee";
export const url=new URL("../icons/calendar-plus-fill.svg?v=ca338bfa79d8abba84958fe900a1879818b949182e4234d448cf2b2028554818",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="calendar_month-fill";
export const id="dl_815e7875e3e1711ada28";
export const url=new URL("../icons/calendar_month-fill.svg?v=58b719a93450081256ddbe7748bbe96b51c67123cc65b47d916b6f407dd63c62",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

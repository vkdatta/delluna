export const name="event_upcoming-fill";
export const id="dl_a1dec077688bd7162354";
export const url=new URL("../icons/event_upcoming-fill.svg?v=645c8486e5362d76a038acf2d936ca75736c5e2f95ae1f92b68fd8daa119ac0e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="event_busy-fill";
export const id="dl_961d31d6d911746d79ab";
export const url=new URL("../icons/event_busy-fill.svg?v=3865cab2bf79f808292e8bb84304a7ea693531417c05ccc2833bcadfccac23cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="calendar-dots-duotone";
export const id="dl_2b491caacc0f4e058959";
export const url=new URL("../icons/calendar-dots-duotone.svg?v=72b4bb72b7b180840bb6f5b86ad94987fc8b1b0fdb49caab09c7a2790a93c707",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

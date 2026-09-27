export const name="calendar_lock";
export const id="dl_00ac43319f20b563349f";
export const url=new URL("../icons/calendar_lock.svg?v=b80f8c3484299d6c78819b3b11ce12d4ff2cce045a64c9fb2427053eb1b1ddc5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

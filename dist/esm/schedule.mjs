export const name="schedule";
export const id="dl_d253faabd5ab47b581b1";
export const url=new URL("../icons/schedule.svg?v=e8dfd705f592896f1f778f739d63267e9e91a0ef37ca41775d5d9c672e05e045",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

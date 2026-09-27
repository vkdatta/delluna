export const name="calendar_lock";
export const id="dl_0f14583b3d8c3082ca2d";
export const url=new URL("../icons/calendar_lock.svg?v=cf199dc8454ed0b48b04f8c18d2878a7b3e001d51798a35c8384b319c8b04052",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

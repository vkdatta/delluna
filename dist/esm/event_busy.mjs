export const name="event_busy";
export const id="dl_5cf40a934b8a6670bb33";
export const url=new URL("../icons/event_busy.svg?v=28e717a5f50e296c4937aa2f5ab76ecae2cd0932f220b90546b47a84433c8361",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

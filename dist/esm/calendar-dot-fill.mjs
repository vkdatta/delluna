export const name="calendar-dot-fill";
export const id="dl_ae34a40528f54a94a924";
export const url=new URL("../icons/calendar-dot-fill.svg?v=66dfd43dba6a7ac2124e79cba575a759cb08ffde5821169763c1e1d383e15980",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

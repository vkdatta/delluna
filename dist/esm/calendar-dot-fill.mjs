export const name="calendar-dot-fill";
export const id="dl_ae34a40528f54a94a924";
export const url=new URL("../icons/calendar-dot-fill.svg?v=5be475e960d5865e3e0acecbc7c180927583f4bea9731b7d68eda91e11f3949d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

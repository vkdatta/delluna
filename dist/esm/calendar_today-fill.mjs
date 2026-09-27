export const name="calendar_today-fill";
export const id="dl_56d75a88c65f3ed769f9";
export const url=new URL("../icons/calendar_today-fill.svg?v=c6fcb2747d40154f0b6ef4a54c86df45f57cf0010bb9a1f557ba61bc592b90d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

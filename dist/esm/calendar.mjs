export const name="calendar";
export const id="dl_90621de83ad54a748cd3";
export const url=new URL("../icons/calendar.svg?v=7ff15504b9aa4719ca647eda2762e9a4f7ba95b2db787890d4cf384cc72c9a41",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

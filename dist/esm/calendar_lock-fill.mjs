export const name="calendar_lock-fill";
export const id="dl_0551678a81128a66a3ef";
export const url=new URL("../icons/calendar_lock-fill.svg?v=bd3a6cd789767cae6a7b9ed067776339cfd37641878ff29c0f9809d58ddb837b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

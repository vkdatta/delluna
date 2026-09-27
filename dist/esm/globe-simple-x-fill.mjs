export const name="globe-simple-x-fill";
export const id="dl_befb488d88e9481bba55";
export const url=new URL("../icons/globe-simple-x-fill.svg?v=b37ee64ba8890963cc9b1f137e637919f88c703bf2863d6a114bb689a9bb597c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

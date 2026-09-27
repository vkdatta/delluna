export const name="monitor_heart-fill";
export const id="dl_2a1999dce666e7635e6c";
export const url=new URL("../icons/monitor_heart-fill.svg?v=fde774503f8f84e0a4085d3fe6505f4c31863d9b3dffa832e34d4c42c86096fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

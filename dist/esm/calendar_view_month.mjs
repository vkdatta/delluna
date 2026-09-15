export const name="calendar_view_month";
export const id="dl_0a7a71db02dd490e9b3d";
export const url=new URL("../icons/C/calendar_view_month.svg?v=93f34e059c2c7d3fa049a4b0079d037ea16d4627db1fef3ec76e8a611023e3b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

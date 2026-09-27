export const name="calendar_view_week";
export const id="dl_71ea17bf1bbf0d594f03";
export const url=new URL("../icons/calendar_view_week.svg?v=442ffbb778dcdce7cfcfb459749a407949a209aa9b1ba28554f1da8093250abb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

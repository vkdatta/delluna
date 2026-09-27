export const name="watch_alert-fill";
export const id="dl_ea11cd1ed106ad94f4db";
export const url=new URL("../icons/watch_alert-fill.svg?v=c4e2bc8865507afcadcf55c72ddc1ac82c649db9ba0d23328d121d241324cecf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

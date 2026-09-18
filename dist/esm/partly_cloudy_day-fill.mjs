export const name="partly_cloudy_day-fill";
export const id="dl_28d8d2f71f18407a9e65";
export const url=new URL("../icons/P/partly_cloudy_day-fill.svg?v=a5d63234cefff8ee9e141086ac24e005484dff8cf258de903a8d2357956797a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

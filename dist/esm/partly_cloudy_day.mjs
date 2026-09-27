export const name="partly_cloudy_day";
export const id="dl_7c8f9b189dd3ccbc5d61";
export const url=new URL("../icons/partly_cloudy_day.svg?v=724bb13a8375aba387330a69a8ec4891c530210af7365e8523729348880b4ad8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="partly_cloudy_day";
export const id="dl_1dbe680538234f5aa636";
export const url=new URL("../icons/P/partly_cloudy_day.svg?v=9b6e8d0576fd31dce0377a3d31fe45acb637bf51a565cee96987f3e176135253",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

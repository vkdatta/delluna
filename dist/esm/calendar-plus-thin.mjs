export const name="calendar-plus-thin";
export const id="dl_c5846d9510da4ecfb3cd";
export const url=new URL("../icons/calendar-plus-thin.svg?v=af5c00ecfa7af1cbce07d846f17cc6fcd5f6bf93704aa0a32cf9751aa2c8c815",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

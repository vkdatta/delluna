export const name="edit_calendar";
export const id="dl_391e477a49d9d70d3281";
export const url=new URL("../icons/edit_calendar.svg?v=03bd3fee24f3c9cf32781473dd45fbc39a713a04a51c46035398f79b39d88657",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

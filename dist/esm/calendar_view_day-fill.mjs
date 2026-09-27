export const name="calendar_view_day-fill";
export const id="dl_165cb2cccb20814946e9";
export const url=new URL("../icons/calendar_view_day-fill.svg?v=e4efd1e5e374f59c23bb4dc754f2d3a2617c281b52963da4c3671e158288b2bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

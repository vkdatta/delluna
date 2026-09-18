export const name="calendar_view_month-fill";
export const id="dl_2e28ad058c204be28ef0";
export const url=new URL("../icons/calendar_view_month-fill.svg?v=eaa712e23f3d865d5d2d2e887c6f72140683910d363accfa2d9102b47969d709",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="calendar_view_week-fill";
export const id="dl_f70a0fc4dbeb4109ae76";
export const url=new URL("../icons/calendar_view_week-fill.svg?v=ee1725a1e103f2ace12ca51faf739533f19f2f3cde77ecf13aa9df89acbfb6dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

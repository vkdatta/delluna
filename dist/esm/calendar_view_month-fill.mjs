export const name="calendar_view_month-fill";
export const id="dl_c41b843d2f1d59535c4b";
export const url=new URL("../icons/calendar_view_month-fill.svg?v=7ee99f82e0487e16bb5ab9c5d94c0e22a9af44b645dd95c5ef66ee997178210c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

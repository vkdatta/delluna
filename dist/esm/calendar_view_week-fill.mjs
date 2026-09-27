export const name="calendar_view_week-fill";
export const id="dl_5a78601ad8413ff8de0e";
export const url=new URL("../icons/calendar_view_week-fill.svg?v=2d64b0aa2dce42fcd04f1784cd17698e350a82da3b6d46a33f3d293f5d0c3b0b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

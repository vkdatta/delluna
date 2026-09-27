export const name="calendar_view_day-fill";
export const id="dl_ef75339f10d87c0fe4bf";
export const url=new URL("../icons/calendar_view_day-fill.svg?v=eac2ff8f96fdd6e5471c50a714c50da5eef5ad504b0e9cdbdd4bcc086ba9f5a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

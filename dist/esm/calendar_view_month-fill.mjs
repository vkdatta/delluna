export const name="calendar_view_month-fill";
export const id="dl_0b03c2f361d79e388b46";
export const url=new URL("../icons/calendar_view_month-fill.svg?v=441a6fb9ffbc489668679aa06fa0f6a540f14a502ea900ab868a3e27cae9ac56",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

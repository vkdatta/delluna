export const name="calendar_view_week-fill";
export const id="dl_3cfed97566935f5b0f99";
export const url=new URL("../icons/calendar_view_week-fill.svg?v=70a5f7c88572b614cf96a220964720d279489d7babb469eb2dfadbd723c62728",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

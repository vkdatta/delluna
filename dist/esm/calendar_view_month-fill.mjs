export const name="calendar_view_month-fill";
export const id="dl_cb903504839e931ca01e";
export const url=new URL("../icons/calendar_view_month-fill.svg?v=0e508501040d7f6332c0011ede07449483d7293c18c4588c6614368293df6e0c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

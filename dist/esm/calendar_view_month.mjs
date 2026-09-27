export const name="calendar_view_month";
export const id="dl_367c0fa0854f47726e72";
export const url=new URL("../icons/calendar_view_month.svg?v=2f31225de4bfc76f1df13dc2b901632013c2372afd6806ce34ce40c25b7c78a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

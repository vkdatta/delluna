export const name="schedule_send-fill";
export const id="dl_548a8d6724a497fe3f74";
export const url=new URL("../icons/schedule_send-fill.svg?v=75df2cbefa64e2fc90be3471bed004d9b4dc55b8b5d49908895d9e72f67f3247",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

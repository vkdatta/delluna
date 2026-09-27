export const name="highlight_text_cursor";
export const id="dl_03aeb9e4f6eaa5b4e576";
export const url=new URL("../icons/highlight_text_cursor.svg?v=717b944a936cfe6c217aedc4270a66c79e31f2d187f332b15629c795c5cab016",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

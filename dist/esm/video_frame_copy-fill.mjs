export const name="video_frame_copy-fill";
export const id="dl_7d648f98b58eb95a85c1";
export const url=new URL("../icons/video_frame_copy-fill.svg?v=ca336267e50c594ea9405d9d8cbae79225d24d854b642ae70b2b52f3de33f829",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

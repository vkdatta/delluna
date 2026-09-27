export const name="missed_video_call-fill";
export const id="dl_2c342a335ede590a0972";
export const url=new URL("../icons/missed_video_call-fill.svg?v=96ebdbd0c4a4e7fb62ab08ce1d007655eb0647f48615286ea158c440bd070aaf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="video_settings-fill";
export const id="dl_90ace5be810c7c7285d6";
export const url=new URL("../icons/video_settings-fill.svg?v=9a4d97abba1b6bcd4a9f7d8aca8fba38699c840c8f4f3a1fa768a33b14ccfcba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

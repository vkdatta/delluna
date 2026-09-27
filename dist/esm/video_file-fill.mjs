export const name="video_file-fill";
export const id="dl_8d972563e480254a15be";
export const url=new URL("../icons/video_file-fill.svg?v=14becc3e944ff6e06e9c512a7c8967fc68183a3049092f7ccb3f940c218707de",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

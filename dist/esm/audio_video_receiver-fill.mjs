export const name="audio_video_receiver-fill";
export const id="dl_7ff2266ed552a48d449d";
export const url=new URL("../icons/audio_video_receiver-fill.svg?v=ea5ee1c50fa15827d42f12484891667bda51dacd03e7b8c00b6a19f828436330",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

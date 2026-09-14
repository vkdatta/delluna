export const name="audio_video_receiver-fill";
export const id="dl_7a350e5a12eb4f67ab41";
export const url=new URL("../icons/A/audio_video_receiver-fill.svg?v=f4e6588404937997943e45239b1146742c486109c95d3a7632ddf217b13fb460",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

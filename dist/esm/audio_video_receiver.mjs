export const name="audio_video_receiver";
export const id="dl_d498bbab57a95efe530e";
export const url=new URL("../icons/audio_video_receiver.svg?v=2d65d28d7bf28d6f73a0164832e686130a132450128c5c9242f44ddb5766ca76",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

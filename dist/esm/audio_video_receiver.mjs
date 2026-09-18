export const name="audio_video_receiver";
export const id="dl_b01bb3bcf1fe46b9b8e7";
export const url=new URL("../icons/audio_video_receiver.svg?v=55ef8a2d462e9af2288349f1dff6ed3fbf58065e1e9793dbb79c4c61cea7c0da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

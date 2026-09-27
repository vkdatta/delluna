export const name="audio_video_receiver";
export const id="dl_2a7302e87ff43cc0dd5c";
export const url=new URL("../icons/audio_video_receiver.svg?v=907117431fbd90149632f0eea39c4b92f3377dac39418b685f039a1fece528b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

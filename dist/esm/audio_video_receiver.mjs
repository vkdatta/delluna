export const name="audio_video_receiver";
export const id="dl_409a8e4e9cfecdc87f43";
export const url=new URL("../icons/audio_video_receiver.svg?v=2f38a5fddcedce3f0535ac4a825124f35a1a637ece09de6346b13f69006ad300",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

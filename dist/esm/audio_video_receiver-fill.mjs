export const name="audio_video_receiver-fill";
export const id="dl_5825c447cb918d0c9965";
export const url=new URL("../icons/audio_video_receiver-fill.svg?v=ab4d6e662e8147c1a1e61a460b0374b75b86504d1a6b5bebbf7dcdc6cc051cdc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

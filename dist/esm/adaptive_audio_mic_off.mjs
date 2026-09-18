export const name="adaptive_audio_mic_off";
export const id="dl_51ff6fd5870d43fea7cf";
export const url=new URL("../icons/adaptive_audio_mic_off.svg?v=27d598046806cd86af759769b267f9653bb0df2041da36bd36190368e89dd78d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

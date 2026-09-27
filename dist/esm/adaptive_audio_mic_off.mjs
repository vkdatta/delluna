export const name="adaptive_audio_mic_off";
export const id="dl_1bf63f84011c01e8524c";
export const url=new URL("../icons/adaptive_audio_mic_off.svg?v=4693eeb01a974b9616aea744eb9d08baa801c0cb32016f34ee80abf4fb5da88b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="adaptive_audio_mic_off";
export const id="dl_73c20dd39b61b9aa7e2a";
export const url=new URL("../icons/adaptive_audio_mic_off.svg?v=01fd5f1c69f8f1d2dfc111c531c39d4fc69b3ad8bd6a57f3d5e0ff95c2b5fd52",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

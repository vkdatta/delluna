export const name="notification_audio_off";
export const id="dl_3011871c3a8145af8b03";
export const url=new URL("../icons/N/notification_audio_off.svg?v=582063b5483f523291464287e48be3ddb7a46cc9b189fb1c725fca5f88bfa8e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

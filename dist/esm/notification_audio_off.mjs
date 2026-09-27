export const name="notification_audio_off";
export const id="dl_a0c584a20b15499ec6e6";
export const url=new URL("../icons/notification_audio_off.svg?v=317fbe2cdf28c5a8a366d78013eaafe4f350892b7ccac4d78dab866464567db4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

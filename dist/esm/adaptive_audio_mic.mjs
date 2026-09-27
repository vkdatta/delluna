export const name="adaptive_audio_mic";
export const id="dl_8a0a169a3e162c950e02";
export const url=new URL("../icons/adaptive_audio_mic.svg?v=81eceaf7785df436ae8ff116f1593746197a54623610486c2c70fcb3986613cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

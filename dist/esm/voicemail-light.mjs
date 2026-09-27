export const name="voicemail-light";
export const id="dl_e217fb5278c7674d68be";
export const url=new URL("../icons/voicemail-light.svg?v=9fd27f05e810f724c2bcc05a96998d321daf9c4f57b488d1f1c41e66f68ec9d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

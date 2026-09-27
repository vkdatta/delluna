export const name="notification_audio_off";
export const id="dl_64af50fe8f3f95870cfc";
export const url=new URL("../icons/notification_audio_off.svg?v=0314da7bda5078c232a163f7a803c452bb9063217782339d3501f82569b9077c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

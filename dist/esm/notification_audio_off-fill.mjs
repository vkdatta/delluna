export const name="notification_audio_off-fill";
export const id="dl_930843d398a126cd1d1c";
export const url=new URL("../icons/notification_audio_off-fill.svg?v=aadedacc9a68925962a8b11fcd8bf9484d4e9ca0bfb04e37a296fb13ffd5dc04",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

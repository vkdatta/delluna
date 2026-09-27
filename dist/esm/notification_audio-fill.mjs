export const name="notification_audio-fill";
export const id="dl_801e402dba0acd649ba4";
export const url=new URL("../icons/notification_audio-fill.svg?v=3cb9c37223a0f9a97d36b6121dbb1f83d55befa64a7ce005f9b171af4e7ee017",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

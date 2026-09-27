export const name="notification_sound";
export const id="dl_16b40a04430fd75a3be2";
export const url=new URL("../icons/notification_sound.svg?v=54f7d28ee987ebd78fa906ba996f32de52b7640e7d4e77909d84b770cf67e225",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

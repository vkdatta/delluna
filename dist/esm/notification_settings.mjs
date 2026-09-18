export const name="notification_settings";
export const id="dl_8645600b2dcf48d4a16c";
export const url=new URL("../icons/notification_settings.svg?v=0508e9ade4e78abea8748005637311b7f79dbf7b99fe6862bab623509c70e2e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

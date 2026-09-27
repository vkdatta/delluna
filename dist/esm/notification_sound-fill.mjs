export const name="notification_sound-fill";
export const id="dl_7b53d0c75783c7ea7bd0";
export const url=new URL("../icons/notification_sound-fill.svg?v=0c77111e6fa7bb5b78a53fd6a872521c33c68495627ff9866055804a9c5271ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

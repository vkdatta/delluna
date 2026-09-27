export const name="notification_sound-fill";
export const id="dl_da2208f0c1069e2a7f48";
export const url=new URL("../icons/notification_sound-fill.svg?v=7f92f574131fc2a007cfd9071aae48e85cd46406992c3dd7f209a555da15b806",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

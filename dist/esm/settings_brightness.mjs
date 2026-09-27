export const name="settings_brightness";
export const id="dl_cb824fb8dcf276003283";
export const url=new URL("../icons/settings_brightness.svg?v=34fb115bf86cc72836eaacfc97f366bcc2aff815b820ba75715bb9309feb45b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

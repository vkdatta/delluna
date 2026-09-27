export const name="notification_settings-fill";
export const id="dl_94ad254f0e1e53a2adfa";
export const url=new URL("../icons/notification_settings-fill.svg?v=f8d220f6a1c305e0e8ab3139226abfcf2d5b1b607e118643611f9578380e5c5d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

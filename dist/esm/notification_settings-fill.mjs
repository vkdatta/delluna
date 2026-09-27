export const name="notification_settings-fill";
export const id="dl_310347563d87b0bdf7a5";
export const url=new URL("../icons/notification_settings-fill.svg?v=0510a4aa603ac1e08a266aa9a6c8cbc612180f128efb86c43cf2b45729912043",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

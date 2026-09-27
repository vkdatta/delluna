export const name="notification_multiple";
export const id="dl_4d0fda629a66287e9af9";
export const url=new URL("../icons/notification_multiple.svg?v=c37e92e8cfd51edde4333a4cb6e245a79f160644a036a68be7d20635b8824498",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="notifications_unread";
export const id="dl_3392a009e7ff1e3a7b43";
export const url=new URL("../icons/notifications_unread.svg?v=7cc02aceb4f33db87dd2bcee4ed169b45846d4a60bdcdaef27e1040d11a9360b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

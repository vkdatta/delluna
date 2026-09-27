export const name="notifications_unread-fill";
export const id="dl_5b7d565173385266cd7e";
export const url=new URL("../icons/notifications_unread-fill.svg?v=c37e63fb3602020fcd4667b6deda3ae074c7a7b5ec22b6ab844c6209f899cc2a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

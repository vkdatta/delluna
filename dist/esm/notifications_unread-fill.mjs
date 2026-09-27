export const name="notifications_unread-fill";
export const id="dl_30cd65527ce4a8687cc5";
export const url=new URL("../icons/notifications_unread-fill.svg?v=9bc5b8ddb130f719784bca31ed4498d23b7c9f11059545554d2fdefea0bb5c9a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

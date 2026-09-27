export const name="notifications_unread-fill";
export const id="dl_6bdfd7da77c98af152c1";
export const url=new URL("../icons/notifications_unread-fill.svg?v=e04e5b102e7e0bfff74a66b6cfb918ca141afe9f33b963920cd4cacfe4b157cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

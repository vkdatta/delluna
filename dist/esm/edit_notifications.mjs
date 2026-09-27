export const name="edit_notifications";
export const id="dl_09e21937a7f18be51f53";
export const url=new URL("../icons/edit_notifications.svg?v=0f17341135f4eeae823341e459753023c1111213ca453a8f7dabe5abdea81be0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

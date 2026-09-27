export const name="mark_as_unread-fill";
export const id="dl_64bf964d870dad45c240";
export const url=new URL("../icons/mark_as_unread-fill.svg?v=564a1e3e1db7f6fa95cbcea8e85c458227bf345bdb72292aa1e6058e81690072",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

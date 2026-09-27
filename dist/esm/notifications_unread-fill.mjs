export const name="notifications_unread-fill";
export const id="dl_acc14a480f53d60148e6";
export const url=new URL("../icons/notifications_unread-fill.svg?v=e21eb08e3839ac0f35f0415654a3b37a8dc1b0f22b80c19e4a5fb239f0e6de04",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

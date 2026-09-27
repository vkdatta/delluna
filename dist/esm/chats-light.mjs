export const name="chats-light";
export const id="dl_81e4dda37ee9434dacac";
export const url=new URL("../icons/chats-light.svg?v=307476354d02f3d2b5bf6e0819a671c96417c85c32db61a0114966c37dc2eb27",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

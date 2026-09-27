export const name="chats-fill";
export const id="dl_83b4c60fe20f471dadef";
export const url=new URL("../icons/chats-fill.svg?v=4ecd779bf107148656b8b9cf03f9de704c9eea3c6f3195f21023928593e59fe9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

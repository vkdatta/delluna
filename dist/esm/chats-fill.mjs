export const name="chats-fill";
export const id="dl_83b4c60fe20f471dadef";
export const url=new URL("../icons/chats-fill.svg?v=c88539cf3c42ef3a42f90d10e9c4736cbad59e2639948dbe647227e56160447b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

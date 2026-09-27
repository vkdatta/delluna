export const name="chat_info";
export const id="dl_d7da16b34bfc5b5c5774";
export const url=new URL("../icons/chat_info.svg?v=d392acce8652e0d8fbf7e66fe0893b02b21df41d8d7b6d7d1b29e83979dd3960",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

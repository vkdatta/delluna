export const name="voice_chat_off";
export const id="dl_3e65dc9318ea8a673f57";
export const url=new URL("../icons/voice_chat_off.svg?v=88e0cc935a19d0b7a9c330372f3d48aed74a3c6a9b76a82714e9397967a60138",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

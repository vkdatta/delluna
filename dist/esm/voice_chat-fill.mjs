export const name="voice_chat-fill";
export const id="dl_f354819ec57e8c801224";
export const url=new URL("../icons/voice_chat-fill.svg?v=cf5dbb883f16fe36723365b73cb29075f1933ff1218229c95c915e86bbd60b0a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

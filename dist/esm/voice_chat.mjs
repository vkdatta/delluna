export const name="voice_chat";
export const id="dl_cc2aaf908d668a95ec5f";
export const url=new URL("../icons/voice_chat.svg?v=eb9cd123e959488fa11b6ca8479068e41b4dec2f7a3f71e3212614f192b797bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

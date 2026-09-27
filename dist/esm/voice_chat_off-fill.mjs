export const name="voice_chat_off-fill";
export const id="dl_ef0072222ce00168f360";
export const url=new URL("../icons/voice_chat_off-fill.svg?v=d27b0dde300e4a8976b927038e9d9c268b350c6a7ddf0862c236066ebf2f8418",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

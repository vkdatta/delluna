export const name="voice_chat_off-fill";
export const id="dl_70ed74df503e181b9fa7";
export const url=new URL("../icons/voice_chat_off-fill.svg?v=e6c08526b8ac85f385e3841e12900ba3a60b8f0c85e275771c56e23590ae02f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

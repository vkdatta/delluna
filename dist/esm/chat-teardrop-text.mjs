export const name="chat-teardrop-text";
export const id="dl_ef152727562e469faad0";
export const url=new URL("../icons/chat-teardrop-text.svg?v=2669d1f74ad9a15a35b500d3384a7508c2a6269bb5c9a38b62eec40a028fe80a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

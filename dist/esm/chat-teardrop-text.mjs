export const name="chat-teardrop-text";
export const id="dl_ef152727562e469faad0";
export const url=new URL("../icons/chat-teardrop-text.svg?v=25f197124ed335a503c0fdc742f7c05e9185ba23080a80a9628e557e315f7fce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

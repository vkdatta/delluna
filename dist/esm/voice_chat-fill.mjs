export const name="voice_chat-fill";
export const id="dl_50b763ce2a974b9202f4";
export const url=new URL("../icons/voice_chat-fill.svg?v=5b8696e6d46ab38a5d8631e52498025934f2c42199b5637a50655ea055569a5e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

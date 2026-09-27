export const name="chat-centered-text-light";
export const id="dl_fa2d59e097684bb9a29f";
export const url=new URL("../icons/chat-centered-text-light.svg?v=06f2c68830054b70a9215be9e641e0f3f905e1aabf08e1b85a20e620a166a2cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

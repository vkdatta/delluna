export const name="chat-slash-light";
export const id="dl_e2a58036d98042e38bfe";
export const url=new URL("../icons/chat-slash-light.svg?v=717459e59d4ed793fb309f89402fe03d450c6a54a36c56424a9fda73a5d309c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

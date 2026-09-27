export const name="chat-centered-light";
export const id="dl_2ac2b5b4ff6a485f9bce";
export const url=new URL("../icons/chat-centered-light.svg?v=803a3f76da929861a719c7c0c6ecabd7cdbc7bb0892188b3ad4a88bcce81f113",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

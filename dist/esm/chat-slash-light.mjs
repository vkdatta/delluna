export const name="chat-slash-light";
export const id="dl_e2a58036d98042e38bfe";
export const url=new URL("../icons/chat-slash-light.svg?v=7f3acc73f681b82ac94370afe14b7e13096d3def7e5c08ea11ce1db6d928777b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

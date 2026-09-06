export const name="chat-text-light";
export const id="dl_a0fe5206979a4844be49";
export const url=new URL("../icons/chat-text-light.svg?v=e959344d82adf521ba80371afe2352a547439678b0ab01e8e70ee101a3e5e735",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

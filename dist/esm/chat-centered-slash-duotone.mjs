export const name="chat-centered-slash-duotone";
export const id="dl_300705eab54645e8bf41";
export const url=new URL("../icons/chat-centered-slash-duotone.svg?v=6a44335002b630ada8567c298ff1e5f64f76b9a30795c2cf514653280d5976ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="chat-centered-duotone";
export const id="dl_4f78db3893924fb5bc93";
export const url=new URL("../icons/chat-centered-duotone.svg?v=11689e7a96dc3c3e1ed8b19924212afec4a6846a930189bd32f4a1ba6ca4b4cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

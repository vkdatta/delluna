export const name="chat-centered-duotone";
export const id="dl_4f78db3893924fb5bc93";
export const url=new URL("../icons/chat-centered-duotone.svg?v=d800833c63a06f192038c8dbca3cd03d254daa80e387f19528a2b7a819f5cfbe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

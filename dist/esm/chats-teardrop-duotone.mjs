export const name="chats-teardrop-duotone";
export const id="dl_0cd0651b6d5b4500941e";
export const url=new URL("../icons/chats-teardrop-duotone.svg?v=31ecbfc8effa5c509b5180e35a24f899bbc29273eab6e17c41b84a881fa36ea2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

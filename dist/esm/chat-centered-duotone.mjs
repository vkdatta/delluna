export const name="chat-centered-duotone";
export const id="dl_4f78db3893924fb5bc93";
export const url=new URL("../icons/chat-centered-duotone.svg?v=56fab0a355cd5c36bed8678a53624e7b4f9b12e821b25b33e2f91931dad2d1a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

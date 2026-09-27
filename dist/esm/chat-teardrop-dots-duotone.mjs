export const name="chat-teardrop-dots-duotone";
export const id="dl_1b15b97117184794b9c9";
export const url=new URL("../icons/chat-teardrop-dots-duotone.svg?v=f0173b81d6c4ca120a330ca0d5b24f88d81a351b2b6962448a5820dcd2934a39",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

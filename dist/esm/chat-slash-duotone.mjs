export const name="chat-slash-duotone";
export const id="dl_0d6ba7be4624401ead6f";
export const url=new URL("../icons/chat-slash-duotone.svg?v=7d63164c262bb41d457d0fb6b760f682218dac690b7db0e791a96aead2b5832b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

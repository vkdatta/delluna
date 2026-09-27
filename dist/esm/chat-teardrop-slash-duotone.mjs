export const name="chat-teardrop-slash-duotone";
export const id="dl_1f7fd345b81c4d2c96a1";
export const url=new URL("../icons/chat-teardrop-slash-duotone.svg?v=a541e41d3a6174ba9fb86ed0f0eedd9fa58b7a77ccb91d8bce88b6ba8dcd37dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

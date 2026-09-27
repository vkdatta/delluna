export const name="chat-teardrop-slash-duotone";
export const id="dl_1f7fd345b81c4d2c96a1";
export const url=new URL("../icons/chat-teardrop-slash-duotone.svg?v=d9e21c20361b2a3831d6d08b126100450fcaec4de992769d69cb52bd3d13360b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

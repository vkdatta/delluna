export const name="chat-teardrop-slash-light";
export const id="dl_a56c4b2bb12243e4afab";
export const url=new URL("../icons/chat-teardrop-slash-light.svg?v=ff118fbda764dc05853b49bd7d52dd54d3d4b05b4606333f87eb835af09b16a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

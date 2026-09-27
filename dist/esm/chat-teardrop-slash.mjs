export const name="chat-teardrop-slash";
export const id="dl_228d30b4438f4f89959e";
export const url=new URL("../icons/chat-teardrop-slash.svg?v=802e53ccb3ed297f6cd175c1f6263f92e9391f046d3b3540522a06596e78580c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

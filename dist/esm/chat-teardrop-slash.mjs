export const name="chat-teardrop-slash";
export const id="dl_228d30b4438f4f89959e";
export const url=new URL("../icons/chat-teardrop-slash.svg?v=e9403f3e118506f86308a27f580f89f0274c16f7f4c65691316dc43c715c8e4a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

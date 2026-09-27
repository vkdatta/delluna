export const name="voice_chat-fill";
export const id="dl_f56e75ee3ca38e78880b";
export const url=new URL("../icons/voice_chat-fill.svg?v=2a80a7fc3aaa1330f6a542470e55259f3caf5087b70f1df986a9ae3ac6337050",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

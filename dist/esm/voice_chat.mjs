export const name="voice_chat";
export const id="dl_7fb92aade62370c23557";
export const url=new URL("../icons/voice_chat.svg?v=2ad01274a04c27e3e474d47defa4cf115db057e3657719e55ec09f7f418e15a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

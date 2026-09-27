export const name="chat-teardrop-slash-fill";
export const id="dl_fa4e833d57c44de9b013";
export const url=new URL("../icons/chat-teardrop-slash-fill.svg?v=079da35344e50a6ebacd03f22cc4ef8732ede81eef70f55f52ef8bcebd07f4dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="chat-teardrop-slash-thin";
export const id="dl_1b19f2075dde4e37978f";
export const url=new URL("../icons/chat-teardrop-slash-thin.svg?v=3223845168fba62b54a6c9fef44d123efd2bee461da03bf1337a015237b4d04d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

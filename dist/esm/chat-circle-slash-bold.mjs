export const name="chat-circle-slash-bold";
export const id="dl_967eac9179824eb2ba1e";
export const url=new URL("../icons/chat-circle-slash-bold.svg?v=656be49bae7e37809ca9048021ddb9531008db747b66b196fb05512c7346e710",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

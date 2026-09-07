export const name="chat-circle-thin";
export const id="dl_286f30c85f474e428b16";
export const url=new URL("../icons/chat-circle-thin.svg?v=838876093deffc2d5f410e6ba9278c272b0d90eb9e117525751ed1ccd978f6ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

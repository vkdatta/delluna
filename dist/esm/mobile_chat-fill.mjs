export const name="mobile_chat-fill";
export const id="dl_619acedf7becb4330a2b";
export const url=new URL("../icons/mobile_chat-fill.svg?v=6e08f22b8843fcf5cc2f456f60d0d8f6007274fbdf5da8470091f741a8572fcd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

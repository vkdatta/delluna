export const name="chat_paste_go-fill";
export const id="dl_20945bc2b4d3e7de0d61";
export const url=new URL("../icons/chat_paste_go-fill.svg?v=6cacefb86939b6de33bf7ade79851d22f1d0442f234dea9ca524cc437e7bc7a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

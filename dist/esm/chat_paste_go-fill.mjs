export const name="chat_paste_go-fill";
export const id="dl_0ed67fcf3b88cf3bab4a";
export const url=new URL("../icons/chat_paste_go-fill.svg?v=bdedc92403b68214b9feb4c34c2a212ea7da1fcd370016b28b98c58d9141f15e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

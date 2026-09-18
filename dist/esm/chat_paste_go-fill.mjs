export const name="chat_paste_go-fill";
export const id="dl_67f2b31560e346b4a18e";
export const url=new URL("../icons/chat_paste_go-fill.svg?v=b746639c3ac3ecf78f472584ccabc431bbe034aed45ddd85cc064f8ca3b3b018",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

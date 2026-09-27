export const name="mark_chat_read-fill";
export const id="dl_39bd43feee14eb31dcc1";
export const url=new URL("../icons/mark_chat_read-fill.svg?v=b29545968e0299be0024d34cd0f083a7eac10e1f947c692134a3fd8dc5cfed20",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

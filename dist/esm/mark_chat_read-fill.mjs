export const name="mark_chat_read-fill";
export const id="dl_689028ee0cad297de6f6";
export const url=new URL("../icons/mark_chat_read-fill.svg?v=01f37e88a8970580248c4029723b64ddfa7b09887e9f5c251cdbf041ee0748de",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

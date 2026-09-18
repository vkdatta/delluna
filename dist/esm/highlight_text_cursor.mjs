export const name="highlight_text_cursor";
export const id="dl_8ce60425a1be467db78f";
export const url=new URL("../icons/highlight_text_cursor.svg?v=7c8b521160e69ff698617a639ea65269ef8e759a85ded1a798fb38faceced63e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

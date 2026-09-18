export const name="mark_unread_chat_alt";
export const id="dl_65d9a9418ae948dba687";
export const url=new URL("../icons/M/mark_unread_chat_alt.svg?v=d60dec315c66205f255063e90812d6f60ed9c67a193574febadcba2d5f4b98a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

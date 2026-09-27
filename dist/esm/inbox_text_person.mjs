export const name="inbox_text_person";
export const id="dl_5ad1869bbd6461d2b000";
export const url=new URL("../icons/inbox_text_person.svg?v=67d83ddf375dc7858b7ae678e4454493424487d70f1f673c51a7d15969c0cb4c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

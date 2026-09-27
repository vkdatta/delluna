export const name="note_stack-fill";
export const id="dl_908fd72a33df16028db7";
export const url=new URL("../icons/note_stack-fill.svg?v=88b7be8171401f26a178f715412095ccb9fb9cc2b57a4b805778b4df681629d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

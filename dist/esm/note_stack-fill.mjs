export const name="note_stack-fill";
export const id="dl_3769afbad0ac416897b8";
export const url=new URL("../icons/N/note_stack-fill.svg?v=59ec613abf17b57be3e526bdec9e2291616d7161aa20cada54b4f1c5bcf56c2a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

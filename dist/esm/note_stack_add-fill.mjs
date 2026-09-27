export const name="note_stack_add-fill";
export const id="dl_1e5537badb6d055a5dbb";
export const url=new URL("../icons/note_stack_add-fill.svg?v=bc9dc64ea170caadc142d133a6c9a08bf9554b9cfcf00d4e6c54d57fb83e934b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

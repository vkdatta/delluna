export const name="note_stack";
export const id="dl_68ae7d2b96485e842584";
export const url=new URL("../icons/note_stack.svg?v=44aa222c22a5bab152f794315e20d73fb09c4f5658a86f91c2f81da7b60330c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

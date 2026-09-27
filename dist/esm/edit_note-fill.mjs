export const name="edit_note-fill";
export const id="dl_e3b446c022fd4c9cfcc5";
export const url=new URL("../icons/edit_note-fill.svg?v=94e716e5b7a32e1b6137903cd3ca2923f877c7cf42f8d5b54ec689cd68ee5b8a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

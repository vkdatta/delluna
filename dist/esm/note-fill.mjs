export const name="note-fill";
export const id="dl_964e40c773ff4d04b3e9";
export const url=new URL("../icons/note-fill.svg?v=9d336e48f672e407beb1a666c53c3e837d5a08286d120352d182157a9241bf7b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

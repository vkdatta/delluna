export const name="note_stack_add-fill";
export const id="dl_4a4655bba52c4cddb07a";
export const url=new URL("../icons/note_stack_add-fill.svg?v=01e27b242d69c0bb85dccf0248e865d88e76e91afcb70c71684b923d82ea1706",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

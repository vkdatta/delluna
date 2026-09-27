export const name="edit_note-fill";
export const id="dl_8840ed9beeeffc146dba";
export const url=new URL("../icons/edit_note-fill.svg?v=81178dc87bae8dd8b29efb9f850cf4a2d9907a487120c24bf920614498da2c3f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

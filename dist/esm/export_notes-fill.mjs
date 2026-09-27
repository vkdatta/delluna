export const name="export_notes-fill";
export const id="dl_d7374d2e5ca2f2f3d4ed";
export const url=new URL("../icons/export_notes-fill.svg?v=10c69a3b32c9241d8daeac9aebed6003dcfc3fdb9885ba83079f08f3f0d6840f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

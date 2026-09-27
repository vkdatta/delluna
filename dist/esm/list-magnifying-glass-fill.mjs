export const name="list-magnifying-glass-fill";
export const id="dl_00415ec723d64b72b1c9";
export const url=new URL("../icons/list-magnifying-glass-fill.svg?v=25d178f6585cd36277238a596e82713b792645bee98674900ae6cb2422dc78a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

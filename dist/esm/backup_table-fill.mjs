export const name="backup_table-fill";
export const id="dl_0798e2229f32a1f6f418";
export const url=new URL("../icons/backup_table-fill.svg?v=ca49d2eaff48846ebde067295deab6a0675aa166c4b6b59d308d7344c9512f6f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="perm_data_setting-fill";
export const id="dl_8588faf358b29e410285";
export const url=new URL("../icons/perm_data_setting-fill.svg?v=d9469a00d17900b555aff92631c71d779da4d13c5b1cb8acd6ac0cacf40b165e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

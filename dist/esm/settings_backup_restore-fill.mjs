export const name="settings_backup_restore-fill";
export const id="dl_b854364707664d70a494";
export const url=new URL("../icons/settings_backup_restore-fill.svg?v=4970c47ac15749201ad7a2cd26ad426aab516db0fd444b752b1fa1551d6c83fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

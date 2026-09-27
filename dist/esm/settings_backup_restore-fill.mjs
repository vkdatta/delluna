export const name="settings_backup_restore-fill";
export const id="dl_249d543871c6ed3337ea";
export const url=new URL("../icons/settings_backup_restore-fill.svg?v=0c3286b10325f16f7ca346e641d6de88f46131990a5adb71b834cbe8d8fd4d53",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

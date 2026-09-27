export const name="settings_backup_restore-fill";
export const id="dl_b55a8d02aeab267cdd12";
export const url=new URL("../icons/settings_backup_restore-fill.svg?v=91ee59d541428bc722654141382a04f1e5ab969f4d3c0f2a584f7db7dab0185d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="settings_night_sight-fill";
export const id="dl_99d713d8f81ccc3d6ed8";
export const url=new URL("../icons/settings_night_sight-fill.svg?v=53d72399af0855f006eb16fe18a3f05d667db604cf0d9eb967eb1bfadc873f89",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

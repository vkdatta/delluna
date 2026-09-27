export const name="admin_panel_settings-fill";
export const id="dl_0d199126d4117df8a606";
export const url=new URL("../icons/admin_panel_settings-fill.svg?v=6db229919e436a90bed08338d5b8af57ff8316e681c773a2eb5a6fac05603a92",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

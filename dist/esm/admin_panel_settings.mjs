export const name="admin_panel_settings";
export const id="dl_9d764ec6b182a23658ea";
export const url=new URL("../icons/admin_panel_settings.svg?v=eb9d051b0a1d88505ded5e7fb5e67eeb1608217b0215c4a5f80cd104e9f887c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

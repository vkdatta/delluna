export const name="admin_panel_settings-fill";
export const id="dl_66de3db5419adb261a18";
export const url=new URL("../icons/admin_panel_settings-fill.svg?v=6e21b8ecdafbc9b6cb7715331794b4933d6bad431f47e2e04e63afe2d433d3cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

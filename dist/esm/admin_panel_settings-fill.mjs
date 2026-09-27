export const name="admin_panel_settings-fill";
export const id="dl_fa092c31af022bf9447d";
export const url=new URL("../icons/admin_panel_settings-fill.svg?v=460985e1ec905360e8cca90982c92600802338a3683f5b23f4aeb6eef91b744b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

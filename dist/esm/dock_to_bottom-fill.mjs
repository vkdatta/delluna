export const name="dock_to_bottom-fill";
export const id="dl_cf11ea10bbdb6a5d5e5d";
export const url=new URL("../icons/dock_to_bottom-fill.svg?v=a8c9d08e278484c4606e43b3b77229b3ed9203d42d110a3672dfc4ebfab275e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="admin_panel_settings";
export const id="dl_5e9d9a2730f274a95ac7";
export const url=new URL("../icons/admin_panel_settings.svg?v=f6f1d52e41301563876d6c250bc296c18b16dd39f2003374ad9e97ab3fbac571",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="admin_panel_settings";
export const id="dl_7143df96f7874fd7a084";
export const url=new URL("../icons/A/admin_panel_settings.svg?v=68845e98e1970bdb6f87cb403120c66aaaa7245bb2fe757761c81c142d6f5281",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

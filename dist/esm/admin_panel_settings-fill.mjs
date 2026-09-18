export const name="admin_panel_settings-fill";
export const id="dl_525fdc0ecc3843a5bef5";
export const url=new URL("../icons/admin_panel_settings-fill.svg?v=5f7c54210658b03bf2e1a13c0d8171d714b42119ff16ef5a3ff5a066bcff842e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="admin_panel_settings";
export const id="dl_2a3c0876d970c87e4f48";
export const url=new URL("../icons/admin_panel_settings.svg?v=a725ed93efb4f7d110bfaab256334f275f998cd70f7cbd4ba9c3a6621a9f23e9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

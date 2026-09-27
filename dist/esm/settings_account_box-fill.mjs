export const name="settings_account_box-fill";
export const id="dl_819a5a0f9a8951cad6f8";
export const url=new URL("../icons/settings_account_box-fill.svg?v=1c559e539ef4026d68e9aa1279f866adadcbe4b68206fc96cc4896045ca89b14",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="settings_account_box-fill";
export const id="dl_0b11e48758154c23a821";
export const url=new URL("../icons/settings_account_box-fill.svg?v=fc3433ef7f3b76295125f88ac31354ad13bb54012545deb929bc607d99ccaf5c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

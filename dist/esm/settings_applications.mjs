export const name="settings_applications";
export const id="dl_d7bca69a8e19d71bea4e";
export const url=new URL("../icons/settings_applications.svg?v=12b9537ac2b05f02f92bec58dcee011cefc09805dfa70e1983e8f1098dfb77b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

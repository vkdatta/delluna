export const name="settings_alert-fill";
export const id="dl_39c8f1166502477fbfff";
export const url=new URL("../icons/S/settings_alert-fill.svg?v=379450a5d6953324e6fd5ce8774631f67f8cea0ddbbe0d2e2872f7c39e32de7a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

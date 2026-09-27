export const name="settings_account_box";
export const id="dl_1b3c8a1b23c10400dd81";
export const url=new URL("../icons/settings_account_box.svg?v=b3dd49bdb6f21afade21e49b5d9904e1808c4a725abc06532deb130d4f7e9b88",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

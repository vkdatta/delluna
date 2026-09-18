export const name="settings_screen";
export const id="dl_511c8167935843998a9f";
export const url=new URL("../icons/S/settings_screen.svg?v=31e0f8d843e9b2e1c6d22f0affe2c16e76c52962d1b91d2263411570e0aec017",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

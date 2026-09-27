export const name="settings_system_daydream-fill";
export const id="dl_383c20ca85975b2854d5";
export const url=new URL("../icons/settings_system_daydream-fill.svg?v=8b3814a5bbd5735c9fed0e29cc9adb095882946c4d2089833e7e3ffaaa9fd52a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

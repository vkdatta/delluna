export const name="settings_motion_mode";
export const id="dl_ad7f88f2ad214c399138";
export const url=new URL("../icons/settings_motion_mode.svg?v=b474fc0b0b118388a674053cc18ed39fd289c2ba314320e91366e2a1b5ddf192",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="settings_motion_mode-fill";
export const id="dl_f32cfd6b2a74c85724f2";
export const url=new URL("../icons/settings_motion_mode-fill.svg?v=9b680507d418fed18b5e97b1c34a41451d028ae18b3de43c078b78895f4b87a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

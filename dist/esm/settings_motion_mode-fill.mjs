export const name="settings_motion_mode-fill";
export const id="dl_f1747ecfca8cb5fccc35";
export const url=new URL("../icons/settings_motion_mode-fill.svg?v=21ee6106199fdbb68d476dc3ddb911f95cf641b47993ecb2062699e134056c09",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

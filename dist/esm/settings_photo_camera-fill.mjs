export const name="settings_photo_camera-fill";
export const id="dl_dacb94f2ba087f80bdcc";
export const url=new URL("../icons/settings_photo_camera-fill.svg?v=8e8c99906313fc6b90d4097b69fa078d5cf9fdb0d4fede39375fb19e238360b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="settings_photo_camera";
export const id="dl_1b54c1d64e5257ccae7e";
export const url=new URL("../icons/settings_photo_camera.svg?v=852faa64e661970ab5788e3570e43cf4cdf000385eb9c645db8140ba19145903",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

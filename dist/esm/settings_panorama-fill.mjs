export const name="settings_panorama-fill";
export const id="dl_47e8b83c3ebc4b8ba898";
export const url=new URL("../icons/S/settings_panorama-fill.svg?v=069bbf0c0698a21305e3b9c5defe5b6cd0fa734dcb91f88ec38c0180c6df97eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

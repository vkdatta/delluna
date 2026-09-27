export const name="settings_cinematic_blur";
export const id="dl_b575644434ecf6788107";
export const url=new URL("../icons/settings_cinematic_blur.svg?v=8cbcd84aa24dbb52a162a60bb0577a18404d58872c64c1350f9e33413d686131",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

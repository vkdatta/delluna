export const name="settings_photo_camera";
export const id="dl_83644f8f9549eb993839";
export const url=new URL("../icons/settings_photo_camera.svg?v=56f1562b37d55d0ce19e8ca9ddfa92f982d8b69c00736d6e21cd6dc9a563b192",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

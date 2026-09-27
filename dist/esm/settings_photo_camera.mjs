export const name="settings_photo_camera";
export const id="dl_983e6219b8e83a636aa5";
export const url=new URL("../icons/settings_photo_camera.svg?v=138e1e0c435f47b6de8901cc5aaedf4dc88f7eafe7007bd700ea463eaf41725a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

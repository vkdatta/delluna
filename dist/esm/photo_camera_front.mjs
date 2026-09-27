export const name="photo_camera_front";
export const id="dl_fc0afa0100755604bd0a";
export const url=new URL("../icons/photo_camera_front.svg?v=8b90438a06422ef173a967737b85dc10b2c7078e457403bdaf3600048cbd7f71",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="perm_camera_mic";
export const id="dl_7254f43fdd56034a8b9a";
export const url=new URL("../icons/perm_camera_mic.svg?v=fa0ac98197138971a545d026ad0d39a3c101dc710eb4d657b6a4e22e4d907f68",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

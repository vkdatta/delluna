export const name="perm_camera_mic-fill";
export const id="dl_5ab4aae6e4355e41742f";
export const url=new URL("../icons/perm_camera_mic-fill.svg?v=350724280b3a357cf2f606dc8a35562f83498c2a7b82a0e7d389515ff8db9707",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

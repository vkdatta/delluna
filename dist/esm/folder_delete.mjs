export const name="folder_delete";
export const id="dl_e1d3d2d28ea3e019de30";
export const url=new URL("../icons/folder_delete.svg?v=ada4c0f788e2c2188e8dbe94ce41cb35bfa8631637cc877557635a84e6e5c130",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

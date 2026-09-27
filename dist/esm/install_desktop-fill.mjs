export const name="install_desktop-fill";
export const id="dl_e0a306813349baa5a09b";
export const url=new URL("../icons/install_desktop-fill.svg?v=3d54268aa2ac41c2a21eb793df9370fa59a51c9afdf9a77f22d6ac410a020557",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

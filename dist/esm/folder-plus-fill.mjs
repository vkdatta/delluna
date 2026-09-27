export const name="folder-plus-fill";
export const id="dl_cf7f101bba2946d29832";
export const url=new URL("../icons/folder-plus-fill.svg?v=55f06d45117d03eb58b9c12130c9b644c995ff36c54e628e945e067d82a213a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

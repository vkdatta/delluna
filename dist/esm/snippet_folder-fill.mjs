export const name="snippet_folder-fill";
export const id="dl_a0a9056931bd45ae94fc";
export const url=new URL("../icons/S/snippet_folder-fill.svg?v=5dd28adf5c645e71eab6571ff504963d64356d785cb4298a059389cc149ca464",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

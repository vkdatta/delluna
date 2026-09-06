export const name="folder-plus-fill";
export const id="dl_cf7f101bba2946d29832";
export const url=new URL("../icons/folder-plus-fill.svg?v=c996ab14e1d8b46135396c9fae8efcf31f1ccd0f3d4916b360e6892c6f48b09f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

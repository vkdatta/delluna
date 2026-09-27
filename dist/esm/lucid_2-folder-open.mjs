export const name="lucid_2-folder-open";
export const id="dl_fdf9e76875f74e1b83a2";
export const url=new URL("../icons/lucid_2-folder-open.svg?v=3b3bec59a04bc68db3a7d685f3b96e0ab066ccfd6929c6afdee32f3d789e7487",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

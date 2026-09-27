export const name="folder_match-fill";
export const id="dl_276751ee412d0059caf1";
export const url=new URL("../icons/folder_match-fill.svg?v=a3656c3d0d1822fa46c9810ef22f8ad419311d26be2751254e2f4531ecfc90d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

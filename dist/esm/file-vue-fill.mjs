export const name="file-vue-fill";
export const id="dl_03c43b83aa02402d9a38";
export const url=new URL("../icons/file-vue-fill.svg?v=fbc42156135b4bf0108428e02f4ca3a4816e4c27fb21046521f9cc18f9396c05",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="manage_search-fill";
export const id="dl_7149e42de0e9478508dd";
export const url=new URL("../icons/manage_search-fill.svg?v=7e936bc520f19c53a051dd24c0b4a82f1c65efb4a0cea9fe3d7fc6061731f451",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

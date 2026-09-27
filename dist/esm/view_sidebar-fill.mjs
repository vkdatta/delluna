export const name="view_sidebar-fill";
export const id="dl_53afbab66cfa92f5563f";
export const url=new URL("../icons/view_sidebar-fill.svg?v=2d0043aa75f05926010522ba05a7ef6153e49ce56b0513b8978dbb03fdfb5e35",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

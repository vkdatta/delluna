export const name="zoom_out-fill";
export const id="dl_a5cad2dd2b9943ddbbeb";
export const url=new URL("../icons/zoom_out-fill.svg?v=08f5ec6abae5eb0ce3e9abced9903142f735abd54ca63bf05f5471de96e21864",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="font_download-fill";
export const id="dl_9b2e543cf40275490b22";
export const url=new URL("../icons/font_download-fill.svg?v=2d24d445a7c0d5cf069fc0f2b221698fbee96617f9e6d303cee5a62ca6e210eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

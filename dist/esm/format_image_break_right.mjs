export const name="format_image_break_right";
export const id="dl_aec6f0651368420f838f";
export const url=new URL("../icons/F/format_image_break_right.svg?v=52e3a6bc330aa3617ed005a058ec71ac8039c4ba0faa261f9d93fb558f26be3d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

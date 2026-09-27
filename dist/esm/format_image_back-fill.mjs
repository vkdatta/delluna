export const name="format_image_back-fill";
export const id="dl_a188d59339279eb80aeb";
export const url=new URL("../icons/format_image_back-fill.svg?v=540ce8d99dff7193658c93239013ea1388e32a9352f50cd680c95378415afd7d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

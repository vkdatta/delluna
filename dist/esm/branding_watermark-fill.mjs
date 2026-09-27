export const name="branding_watermark-fill";
export const id="dl_a6659c9255824043040f";
export const url=new URL("../icons/branding_watermark-fill.svg?v=500927c8bebbedc3cf219b6d704103f13699a6b5e79aa172994225d0a42c9a42",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

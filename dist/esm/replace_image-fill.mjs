export const name="replace_image-fill";
export const id="dl_955afb7764c5addc5318";
export const url=new URL("../icons/replace_image-fill.svg?v=edc53436807312134b57cc6638ce25a0d5c0d3d45a7a236332cfef6277c1c9f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

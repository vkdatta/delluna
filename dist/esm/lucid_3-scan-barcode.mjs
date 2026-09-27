export const name="lucid_3-scan-barcode";
export const id="dl_864da198b5db45839cd2";
export const url=new URL("../icons/lucid_3-scan-barcode.svg?v=d386459c5f16bcfec13722f29cba9ad51eb5836c332afbc73d91bf74daa38aeb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

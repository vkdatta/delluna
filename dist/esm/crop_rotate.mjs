export const name="crop_rotate";
export const id="dl_908e4273382a56b86c3f";
export const url=new URL("../icons/crop_rotate.svg?v=d170f435f1be3b8c6a0e444249435497cc0226a6a15e4a762a11365d7000e31a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

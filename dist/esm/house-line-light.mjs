export const name="house-line-light";
export const id="dl_6dd126b446e74098806e";
export const url=new URL("../icons/house-line-light.svg?v=19ad92edfda6c05f16834fbe26c36b36ef4d62a62983ebb615c1c7d0f98c5350",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

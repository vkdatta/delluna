export const name="file-arrow-down-light";
export const id="dl_3aa080f4807f4e35a6ae";
export const url=new URL("../icons/file-arrow-down-light.svg?v=6a0be76131897961fc2bde4f35ec29169b3eff0b6872639965309525cd539928",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

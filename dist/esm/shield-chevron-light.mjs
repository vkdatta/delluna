export const name="shield-chevron-light";
export const id="dl_31996af74751a3d52596";
export const url=new URL("../icons/shield-chevron-light.svg?v=72db4f89b0b1f48ce8550f46c8f90433de9091a1c1e7fee8b30ce48997c98c01",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

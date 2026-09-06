export const name="eyedropper-light";
export const id="dl_d3fcec97871e416fab84";
export const url=new URL("../icons/eyedropper-light.svg?v=945a51b62fee1a79bf8ce73753f1301d5a5ea58770c7d4bf3794c3b638f4fca3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

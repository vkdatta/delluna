export const name="eyedropper-light";
export const id="dl_d3fcec97871e416fab84";
export const url=new URL("../icons/eyedropper-light.svg?v=33263304fb44a29eb45587aded0e2a913b9499d57c54855bb7ef2ab2521ad59d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

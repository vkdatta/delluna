export const name="potted-plant-duotone";
export const id="dl_0caff1ed4a1d454f8317";
export const url=new URL("../icons/potted-plant-duotone.svg?v=5632dda9fbdfcc8b1d30942cd83886640f0e13b54ac6834bb39bd9c04e89d21d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

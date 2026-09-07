export const name="ambulance-duotone";
export const id="dl_9b9d0980b9a84559916e";
export const url=new URL("../icons/ambulance-duotone.svg?v=53436daa191a5ad5402b9a7cb14861a05d390b3d18f409c7d857d8d80313f6d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

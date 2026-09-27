export const name="contrast_circle-fill";
export const id="dl_a519ad2e23833fd50a36";
export const url=new URL("../icons/contrast_circle-fill.svg?v=ee1befc7657ea068c899134812a60080c11ad267b35c5a726be3d020b0ef2f30",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

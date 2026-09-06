export const name="cooking-pot-duotone";
export const id="dl_2bb9e6a9305b45cf9c3d";
export const url=new URL("../icons/cooking-pot-duotone.svg?v=cc5ec614060ff9e2a674e1a951eca6dbeea9b894237f50171d1cf3ab28202223",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

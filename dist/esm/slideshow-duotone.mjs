export const name="slideshow-duotone";
export const id="dl_edf3fa5eb47441ff94b9";
export const url=new URL("../icons/S/slideshow-duotone.svg?v=a3d5fbd7ae0908389bdfd858b1ad30883ac2371cacc3f239fe86640ce9d1f0bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

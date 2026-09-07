export const name="gear-six-duotone";
export const id="dl_0532c89f86254b48a9bf";
export const url=new URL("../icons/gear-six-duotone.svg?v=049e51d9b794d6b2649073414f90daed5ebadbebfcefb178170aef21c7ace330",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

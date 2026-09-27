export const name="circles-three-duotone";
export const id="dl_861c4fdd567f41808c45";
export const url=new URL("../icons/circles-three-duotone.svg?v=2514c44ca043294f0c5dcdc5de71ea2b9f3de3740cceb964ea53f9bb23980daa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

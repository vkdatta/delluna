export const name="intersect-three-duotone";
export const id="dl_225a54b3212f4c18b0b5";
export const url=new URL("../icons/intersect-three-duotone.svg?v=c56a9f0024f7683a730aea22e56601994b7f926b5e51ce40b403a503e29f69fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

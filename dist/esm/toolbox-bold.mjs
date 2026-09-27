export const name="toolbox-bold";
export const id="dl_633f67874cff157266f0";
export const url=new URL("../icons/toolbox-bold.svg?v=191ee3b62bfd4c4f687983bae38cb19f3a6fb11ac98f9fd68ff536f32769779d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

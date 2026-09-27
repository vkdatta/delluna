export const name="towel-duotone";
export const id="dl_73831377eeb729ecec2c";
export const url=new URL("../icons/towel-duotone.svg?v=d6a0b543f1526fa3bc18df7e3681f0ded3aef4fa85135c85a0ab7c44a7905343",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="ink_marker-fill";
export const id="dl_35e119c64ff2323e1a5b";
export const url=new URL("../icons/ink_marker-fill.svg?v=b9a1c486a7c925d758b7acc51c684b2738e1cd4f10c663c07b899a9c13e0b8e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

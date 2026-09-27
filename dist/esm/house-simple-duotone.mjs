export const name="house-simple-duotone";
export const id="dl_294d8bd977cd4b3d88a1";
export const url=new URL("../icons/house-simple-duotone.svg?v=a6971576d170819c30837a3798fe1f57f4fc745712247a533f24e1294da44362",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

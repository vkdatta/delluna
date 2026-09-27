export const name="folder-duotone";
export const id="dl_e8c20b74a6aa41158d05";
export const url=new URL("../icons/folder-duotone.svg?v=5c45a8acc6300c7aed5993f5799c0ed64902e90317b44b367a0838c0b32771cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

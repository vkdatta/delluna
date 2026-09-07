export const name="plug-charging-light";
export const id="dl_f3d986aa69ad4330b5d0";
export const url=new URL("../icons/plug-charging-light.svg?v=873fe4d44b7b31cb4de4ebb6e93e3036239bee36031e6101ba054be446bb609a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

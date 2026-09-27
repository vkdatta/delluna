export const name="plug-charging-light";
export const id="dl_f3d986aa69ad4330b5d0";
export const url=new URL("../icons/plug-charging-light.svg?v=e87739f07518c6ae617eda8a5beda72b0ff3bc06259bf15442b2122f9d7c7de2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

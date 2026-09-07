export const name="split-horizontal-light";
export const id="dl_0360fb0481864385b31f";
export const url=new URL("../icons/S/split-horizontal-light.svg?v=a2d9b4541c21c4ac11f5c8905129dc3f5b7224d988e3d27daf73d7978890ba4c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

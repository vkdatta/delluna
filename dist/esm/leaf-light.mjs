export const name="leaf-light";
export const id="dl_6253b923dec94695b289";
export const url=new URL("../icons/leaf-light.svg?v=1d3a5ec403b47ef728f2b71e700f7a674e0f371de7eacc214ac67f56c8758e75",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

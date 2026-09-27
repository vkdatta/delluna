export const name="island-duotone";
export const id="dl_8e6c9a5b53e84d368a44";
export const url=new URL("../icons/island-duotone.svg?v=82f27779f16ef7131d0150db96f7207229a190876cdc71d01a4a1f4725f665b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

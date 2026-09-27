export const name="arrow-bend-double-up-left-duotone";
export const id="dl_3d6f77fa79cf4707b11d";
export const url=new URL("../icons/arrow-bend-double-up-left-duotone.svg?v=33ab0502773c298c610f0560f1c5c00717814f914bf4c6f75307b45438b529aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

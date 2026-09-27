export const name="crop-duotone";
export const id="dl_a84c9750cf7f4c219f4d";
export const url=new URL("../icons/crop-duotone.svg?v=5ba49f8e10d64110fbdb2dae4c8cd9eb22c49d17f3a741dcf2c71d89172f1d85",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="soba";
export const id="dl_a9326d18a3d242a0bf72";
export const url=new URL("../icons/S/soba.svg?v=5fc1353dacbab6f4e039d5b0ca501184125bc74955a431486f3c05f5bf354b8e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

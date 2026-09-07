export const name="tote-simple";
export const id="dl_00cd3b8bbcc24bf39151";
export const url=new URL("../icons/T/tote-simple.svg?v=0f5027be2170f0ae6ef393d4bf1c41804e7fe70bfd72f2ef979a020321db5a85",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

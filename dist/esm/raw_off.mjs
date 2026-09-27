export const name="raw_off";
export const id="dl_bff9d964b10394894d1c";
export const url=new URL("../icons/material_symbols/raw_off.svg?v=a6ca593dbb24eca086cd945a9ff6f6f767559331f9e14643439642b800284f92",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

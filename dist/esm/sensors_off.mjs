export const name="sensors_off";
export const id="dl_4560294f5aad43dda195";
export const url=new URL("../icons/material_symbols/sensors_off.svg?v=7f67ebee6156b176531b03b2532bb475c7221af92fb75a38e64c004ed98a0b43",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="paw-print-duotone";
export const id="dl_b1ce678ba86c46f19715";
export const url=new URL("../icons/paw-print-duotone.svg?v=2d10fb0d6e3797fc3530c9976e90799683c6a8a30cadae975edc421c12171950",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

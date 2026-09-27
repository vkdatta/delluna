export const name="cloud-sun-fill";
export const id="dl_e612fb07d0424181a964";
export const url=new URL("../icons/cloud-sun-fill.svg?v=3f9bc92e1877e04fc88c6177180dd6ee26198050408e06b1f24a4af836aaccc7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

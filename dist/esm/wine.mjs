export const name="wine";
export const id="dl_11922815832d2a1a8dd5";
export const url=new URL("../icons/wine.svg?v=a9d71ca3d3a929979bd4aa938dd40950e16b0bc2f26e319eff991cc6931ee18b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="altitude-fill";
export const id="dl_eff4c9d347fc01b230aa";
export const url=new URL("../icons/altitude-fill.svg?v=d3c2f34c4aa48b7ff86b4f90cb633e73f6f078d24cffe86e18d5798825fd5c0b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

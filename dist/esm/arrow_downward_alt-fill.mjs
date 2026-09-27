export const name="arrow_downward_alt-fill";
export const id="dl_1fa8ac028a602c29e7eb";
export const url=new URL("../icons/arrow_downward_alt-fill.svg?v=a64a71fe733ad6a8818addd615d2299ce44bd1f65179852ba44a3302dd30582d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

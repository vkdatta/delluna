export const name="resize";
export const id="dl_7983bdd62f314a00bcee";
export const url=new URL("../icons/resize.svg?v=6d194ce52e287650801d48706d0515d0bd9888019bdc2ecf6e6b7a9b9898125c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

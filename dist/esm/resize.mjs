export const name="resize";
export const id="dl_7983bdd62f314a00bcee";
export const url=new URL("../icons/resize.svg?v=ea0aa62d3d00fd4a74a1c1afa127c9c668c3a73f51740b275d72b3b7cf514c82",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

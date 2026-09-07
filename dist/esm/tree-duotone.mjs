export const name="tree-duotone";
export const id="dl_fa0ac1ac96884b628883";
export const url=new URL("../icons/T/tree-duotone.svg?v=de05cdd50d72f0561bc3c4fc8fd55262e35a5afc2c49e01978b0d2ab2217f8ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

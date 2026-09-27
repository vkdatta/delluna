export const name="ice_skating-fill";
export const id="dl_3c837a9867cf1e499091";
export const url=new URL("../icons/ice_skating-fill.svg?v=e04684ce9b02681931ab9ad69db54b04b31c092ccf199897c72260e6504e9a6f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

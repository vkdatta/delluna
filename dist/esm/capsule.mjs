export const name="capsule";
export const id="dl_c276af4491d54969b79c";
export const url=new URL("../icons/capsule.svg?v=e1cb29b278a31ed8dc6fd43e8962720c5c15a282ce643b13b7bfaf8437353e92",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

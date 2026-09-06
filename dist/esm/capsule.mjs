export const name="capsule";
export const id="dl_c276af4491d54969b79c";
export const url=new URL("../icons/capsule.svg?v=885d8891a3c0a324aab022b75ab2e9b7a583b417ad61bf0b55f1d8b4af895f90",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

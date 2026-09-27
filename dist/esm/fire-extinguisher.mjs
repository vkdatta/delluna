export const name="fire-extinguisher";
export const id="dl_b29b168bd9a1403aa8fc";
export const url=new URL("../icons/fire-extinguisher.svg?v=0c733e5f01cccc4edefcf5bf46a61aa07ae43baed0cb021e0245666751b7463f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="crane-tower-duotone";
export const id="dl_79e8296ac0034443b321";
export const url=new URL("../icons/crane-tower-duotone.svg?v=99e83179f0aa831349a3c77b71d427a5580d34fc28757d01a1553ba20ae1791c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

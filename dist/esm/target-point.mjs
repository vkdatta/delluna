export const name="target-point";
export const id="dl_bc895eafb274456d91b3";
export const url=new URL("../icons/add/target-point.svg?v=eb22c496782062b35819dd606e7040963be80ec95edf49b3ba2c70a402291153",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="rrow-big-down";
export const id="dl_f4ac0b4d3e7540d7bdc7";
export const url=new URL("../icons/rrow-big-down.svg?v=5334b3f78734670d032ac54645e05f9a5d757c5246ac1272006f487f5b5ef868",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="femur_alt-fill";
export const id="dl_f2afec9ff6fd776f4228";
export const url=new URL("../icons/femur_alt-fill.svg?v=ed578117c60a29288a80f321c1394c0e0e5c84cdef83b51341fa12e18cd8b8b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

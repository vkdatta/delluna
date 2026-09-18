export const name="airlines-fill";
export const id="dl_c99ae4870930448ab5af";
export const url=new URL("../icons/airlines-fill.svg?v=2e827c79abb77e16b982f8eb2f87919d81f3f2c09e7660bac7e59c7ea2275444",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
